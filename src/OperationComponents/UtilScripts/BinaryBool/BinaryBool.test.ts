import {BinaryBool} from './BinaryBool';

test('If input is a binary number returns true.', () => {
    expect(BinaryBool('10')).toBe(true)
});
test('If input is not a binary number returns false.', () => {
    expect(BinaryBool('abc')).toBe(false)
});
test('If theres no input returns false.', () => {
    expect(BinaryBool('')).toBe(false)
});
