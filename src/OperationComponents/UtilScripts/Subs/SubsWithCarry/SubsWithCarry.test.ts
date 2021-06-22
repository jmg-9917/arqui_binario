import {SubsWithCarry} from './SubsWithCarry';

test('Find the correct value that needs a carry value.', () => {
    expect(SubsWithCarry([1, 0, 0, 0, 0], [0, 0, 1, 0, 0])).toBe(2)
});

test('Substract ', () => {
    expect(SubsWithCarry([1, 0, 0, 0, 0], [0, 0, 1, 0, 0])).toBe(2)
});

