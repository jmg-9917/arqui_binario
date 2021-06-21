import {MakeBinaryNumberFromArray} from './MakeBinaryNumberFromArray';

test('Makes [1,0,1,0] into a number correctly', () => {
    expect(MakeBinaryNumberFromArray([1, 0, 1, 0])).toBe(10)
})

test('Incorrect value passed catched correctly', () => {
    expect(MakeBinaryNumberFromArray([])).toBe(0)
})
