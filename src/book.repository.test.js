const BookRepository = require("./book.repository");

beforeEach(() => {
  dbMock = {
    get: jest.fn(),
    size: jest.fn(),
    value: jest.fn(),
    push: jest.fn(),
    write: jest.fn()
  };
  repository = new BookRepository(dbMock);
});

describe("Book repository Save", function() {
  test("Save a book", () => {
    dbMock.get.mockReturnValue(dbMock);
    dbMock.push.mockReturnValue(dbMock);

    repository.save({ id: 1, name: "Unit test" });

    expect(dbMock.write.mock.calls.length).toBe(1);
  });
});
describe("Book repository Get Total Items", function() {
  test("Get Total books", () => {
    dbMock.get.mockReturnValue(dbMock);
    dbMock.size.mockReturnValue(dbMock);
    dbMock.value.mockReturnValue(9999);

    repository.getTotalCount();

    expect(dbMock.value.mock.results[0].value).toBe(9999);
    expect(dbMock.get.mock.calls.length).toBe(1);
    expect(dbMock.value.mock.calls.length).toBe(1);
    expect(dbMock.size.mock.calls.length).toBe(1);
  });
});
