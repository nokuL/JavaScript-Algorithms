import pkg from '@jest/globals';
const { describe, it, expect } = pkg;

import findUniqueElements from '../findUniqueElements.mjs';

describe("findUniqueElements", ()=>{
    it("Returns number of unique elements", ()=>{
        const array = [1, 0, 0, 2,3, 4];
        const result = findUniqueElements(array);
        const expected = 5;
        expect(expected).toEqual(result);

    });
  
})