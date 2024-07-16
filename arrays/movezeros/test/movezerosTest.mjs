import pkg from '@jest/globals';
const { describe, it, expect } = pkg;

import moveZeroes from '../movezeros/movezeros.mjs';

describe('move zeros', () => {
  it("moves zeros to end for valid array", () => {
    const validArray = [1, 0, 1, 3, 0];
    const resultArray = moveZeroes(validArray);
    const expected = [1, 1, 3, 0, 0];
    expect(resultArray).toEqual(expected);
  });

  it("throws an exception if array is invalid", () => {
    const invalidArray = [1, 2, 3, 4];
    expect(() => moveZeroes(invalidArray)).toThrow(Error);
  });
});
