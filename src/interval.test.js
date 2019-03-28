const Interval = require("./interval");

const mainInterval = new Interval(2, 7);

describe("overlapse", function() {
  test("Upper interval", () => {
    const upperInterval = new Interval(10, 12);
    expect(mainInterval.overlaps(upperInterval)).toBe(false);
  });
  test("Lower interval", () => {
    const lowerInterval = new Interval(0, 1);
    expect(mainInterval.overlaps(lowerInterval)).toBe(false);
  });
  test("Inside interval", () => {
    const insideInterval = new Interval(3, 6);
    expect(mainInterval.overlaps(insideInterval)).toBe(true);
  });
  test("Interval with first bound inside", () => {
    const firstBoundInsideInterval = new Interval(3, 9);
    expect(mainInterval.overlaps(firstBoundInsideInterval)).toBe(true);
  });
  test("Interval with second bound inside", () => {
    const secondBoundInsideInterval = new Interval(-3, 6);
    expect(mainInterval.overlaps(secondBoundInsideInterval)).toBe(true);
  });
  test("Interval first bound touch", () => {
    const firstBoundTouchInterval = new Interval(0, 2);
    expect(mainInterval.overlaps(firstBoundTouchInterval)).toBe(false);
  });
  test("Interval second bound touch", () => {
    const secondBoundTouchInterval = new Interval(7, 10);
    expect(mainInterval.overlaps(secondBoundTouchInterval)).toBe(false);
  });
  test("Interval equals", () => {
    expect(mainInterval.overlaps(mainInterval)).toBe(true);
  });
});
