const Interval = require("./interval");

const mainInterval = new Interval(2, 7);
const upperInterval = new Interval(10, 12);
const lowerInterval = new Interval(0, 1);
const insideInterval = new Interval(3, 6);
const firstBoundInsideInterval = new Interval(3, 9);
const secondBoundInsideInterval = new Interval(-3, 6);
const firstBoundTouchInterval = new Interval(0, 2);
const secondBoundTouchInterval = new Interval(7, 10);

describe("overlapse", function() {
  test("Upper interval", () => {
    expect(mainInterval.overlaps(upperInterval)).toBe(false);
  });
  test("Lower interval", () => {
    expect(mainInterval.overlaps(lowerInterval)).toBe(false);
  });
  test("Inside interval", () => {
    expect(mainInterval.overlaps(insideInterval)).toBe(true);
  });
  test("Interval with first bound inside", () => {
    expect(mainInterval.overlaps(firstBoundInsideInterval)).toBe(true);
  });
  test("Interval with second bound inside", () => {
    expect(mainInterval.overlaps(secondBoundInsideInterval)).toBe(true);
  });
  test("Interval first bound touch", () => {
    expect(mainInterval.overlaps(firstBoundTouchInterval)).toBe(false);
  });
  test("Interval second bound touch", () => {
    expect(mainInterval.overlaps(secondBoundTouchInterval)).toBe(false);
  });
  test("Interval equals", () => {
    expect(mainInterval.overlaps(mainInterval)).toBe(true);
  });
});

/*
 * includes est une fonction qui retourne true si un interval a contient un interval b, false sinon
 */
describe("includes", function() {
  test("Upper interval", () => {
    expect(mainInterval.includes(upperInterval)).toBe(false);
  });
  test("Lower interval", () => {
    expect(mainInterval.includes(lowerInterval)).toBe(false);
  });
  test("Inside interval", () => {
    expect(mainInterval.includes(insideInterval)).toBe(true);
  });
  test("Interval with first bound inside", () => {
    expect(mainInterval.includes(firstBoundInsideInterval)).toBe(false);
  });
  test("Interval with second bound inside", () => {
    expect(mainInterval.includes(secondBoundInsideInterval)).toBe(false);
  });
  test("Interval first bound touch", () => {
    expect(mainInterval.includes(firstBoundTouchInterval)).toBe(false);
  });
  test("Interval second bound touch", () => {
    expect(mainInterval.includes(secondBoundTouchInterval)).toBe(false);
  });
  test("Interval equals", () => {
    expect(mainInterval.includes(mainInterval)).toBe(true);
  });
});

/*
 * union est une fonction qui retourne l'union de deux intervals sous forme de tableau
 */
describe("Union", function() {
  test.each([
    [mainInterval, upperInterval, [new Interval(10, 12), new Interval(2, 7)]],
    [mainInterval, lowerInterval, [new Interval(0, 1), new Interval(2, 7)]],
    [mainInterval, insideInterval, [new Interval(2, 7)]],
    [mainInterval, firstBoundInsideInterval, [new Interval(2, 9)]],
    [mainInterval, secondBoundInsideInterval, [new Interval(-3, 7)]],
    [mainInterval, firstBoundTouchInterval, [new Interval(0, 7)]],
    [mainInterval, secondBoundTouchInterval, [new Interval(2, 10)]]
  ])("Union between %p and %p is equal to %p", (s1, s2, expected) => {
    expect(s1.union(s2)).toEqual(expected);
  });
});
