import pkg from '@jest/globals';
const { describe, it, expect } = pkg;
import removeDuplicates from '../removeDuplicates.mjs';
describe("removeDUplicates", ()=>{
    it("Removes duplicates from an array", ()=>{

    const array = [1, 0, 0, 2,3, 4];
    const expected = 4;

    const result = removeDuplicates(array);
    expect(expected).toEqual(result);

 
    })
});