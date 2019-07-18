const { customSort } = require('./customSort');

describe("index", () => {

  const inputs  = [92, 9, 1, 1, 1];
  const expected = [9, 92, 1, 1, 1];

  const inputs2  = [8, 1, 8, 7, 7, 2, 2, 2];
  const expected2 = [1, 7, 7, 8, 8, 2, 2, 2];

  test("should sort by frequency then by value", () => {
    const output = customSort(inputs);
    expect(output).toEqual(expected);
  });

  test("should sort by frequency then by value", () => {
    const output = customSort(inputs2);
    expect(output).toEqual(expected2);
  });
});