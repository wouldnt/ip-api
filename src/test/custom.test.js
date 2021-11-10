const httpMock = require("node-mocks-http");
const { convertDate, validateData } = require("../utils/custom");

let req;
let res;

describe("utils custom testing ", () => {
  beforeEach(() => {
    req = httpMock.createRequest();
    res = httpMock.createResponse();
    next = jest.fn();
  });

  it("convertdate", () => {
    const getDate = convertDate({});
    expect(convertDate({})).toHaveProperty("createdAt", getDate.createdAt);
    expect(convertDate({})).toHaveProperty("updatedAt", getDate.updatedAt);
  });

  it("validate data", () => {
    const msg = require("../utils/exceptions");
    validateData(req, res, msg, "world", {});
  });
});
