const httpMock = require("node-mocks-http");
const { paging } = require("../utils");

let req;

describe("all utils testing", () => {
  beforeEach(() => {
    req = httpMock.createRequest();
    res = httpMock.createResponse();
    next = jest.fn();
  });

  it("pagination helpers", () => {
    const page = paging(req);
    expect(page).toHaveProperty("search");
    expect(page).toHaveProperty("sort");
    expect(page).toHaveProperty("page");
    expect(page).toHaveProperty("limit");
  });
});
