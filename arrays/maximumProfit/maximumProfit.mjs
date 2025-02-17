import pkg from '@jest/globals';
const { describe, it, expect } = pkg;

import maximumProfit from '../maximumProfit.mjs';

describe("maximumProfit", ()=>{
    it("Returns the maximum profit", ()=>{
        const prices = [7,1,5,3,6,4];
        const result = maximumProfit(prices);
        const expected = 5;
        expect(expected).toEqual(result);
    })
})