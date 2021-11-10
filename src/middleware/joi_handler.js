const { errorResponse } = require("../utils/exceptions");

const options = {
  abortEarly: true,
  allowUnknown: true,
  stripUnknown: true,
};

const joiResult = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property], options);
  const valid = error == null;
  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    errorResponse(res, message, 422);
  }
};

module.exports = { joiResult };
