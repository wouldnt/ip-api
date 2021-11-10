const express = require("express");

const app = express();
const cors = require("cors");
const compress = require("compression");
const methodOverride = require("method-override");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan");
const { notFoundHandler, errorHandler } = require("./utils/exceptions");
const { MORGAN_FORMAT } = require("./utils/constant");
const routing = require("./routes");
require("dotenv").config();

app.use(compress());
app.use(methodOverride());
app.use(helmet());
app.use(cors());
app.options("*", cors());
app.use(express.json({ limit: "200kb" }));

const morganFormat = MORGAN_FORMAT;
app.use(morgan(morganFormat, { stream: process.stderr }));

app.get("/favicon.ico", (_req, res) => {
  res.status(204);
  res.end();
});
app.use(xss());
app.use(routing);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
