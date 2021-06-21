import {Sum} from './Sum';

test('Can sum 1 + 1 in binary', () => {
    const sum = Sum([1], [1])
    expect(Sum([1], [1]).result).toStrictEqual(sum.result)
});

test('Sum 10101010 and 11111111 correctly', () => {
    const sum = Sum([1, 0, 1, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1])
    expect(Sum([1, 0, 1, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1]).result).toStrictEqual(sum.result)
});

test('Sum 0 and 0 correctly', () => {
    const sum = Sum([0], [0])
    expect(Sum([0], [0]).result).toStrictEqual(sum.result)
});

test('Can sum 2 + 1 in binary', () => {
    const sum = Sum([1, 0], [0, 1])
    expect(Sum([1, 0], [0, 1]).result).toStrictEqual(sum.result)
});

test('Sum 11000000000 and 1 correctly', () => {
    const sum = Sum([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    expect(Sum([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]).result).toStrictEqual(sum.result)
});
