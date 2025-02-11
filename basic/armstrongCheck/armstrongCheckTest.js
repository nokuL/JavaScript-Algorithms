import pkg from '@jest/globals';
const {describe, it, expect} = pkg;

describe('armstrongCheck',()=>{
    it('should return true is the number is really an armstrong number',()=>{
        const num = 153;
        const armstrongCheck = require('./armStrongCheck');
        const result = armstrongCheck(num);
        const expected = true;
        expect(expected).toEqual(result);
    } )
});

describe('armstrongCheck',()=>{
    it('should return false if the number is not an armstrong number', ()=>{
        const num = 123;
        const armstrongCheck = require('./armStrongCheck');
        const result = armstrongCheck(num);
        const expected = false
        expect(expected).toEqual(result);
    })
})

describe('armstrongCheck',()=>{
    it('should return true if the number is an armstrong number',()=>{
        const num = 370;
        const armstrongCheck = require('./armStrongCheck');
        const result = armstrongCheck(num);
        const expected = true;
        expect(expected).toEqual(result);
    })
})