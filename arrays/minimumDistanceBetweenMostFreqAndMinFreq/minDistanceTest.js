import pkg from '@jest/globals';
const { describe, it, expect } = pkg;
import minDistance from './minDistance';

describe("Find Mininum distance between any two elements", ()=>{
    it("Returns distance for valid array", ()=>{
        const validArray = [1,2, 3, 2];
        const result = minDistance(validArray, 1, 2);
        expect(result).toEqual(3);
    })
})