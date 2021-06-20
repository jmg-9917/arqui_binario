import {Sum} from './Sum';

test('Can sum 1 + 1 in binary', () => {
    expect(Sum([1], [1])).toStrictEqual([1, 0])
});

test('Sum 10101010 and 11111111 correctly', () => {
    expect(Sum([1, 0, 1, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual([1, 1, 0, 1, 0, 1, 0, 0, 1])
});

test('Sum 0 and 0 correctly', () => {
    expect(Sum([0], [0])).toStrictEqual([0])
});

test('Can sum 2 + 1 in binary', () => {
    expect(Sum([1, 0], [0, 1])).toStrictEqual([1, 1])
});

test('Sum 11000000000 and 1 correctly', () => {
    expect(Sum([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toStrictEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1])
});
