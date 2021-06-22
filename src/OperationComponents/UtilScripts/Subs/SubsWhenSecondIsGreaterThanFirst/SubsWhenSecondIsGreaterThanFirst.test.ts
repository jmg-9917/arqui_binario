import {SubsWhenSecondIsGreaterThanFirst} from '../SubsWhenSecondIsGreaterThanFirst/SubsWhenSecondIsGreaterThanFirst';

test('Substracts 011011 and 100000', () => {
    expect(SubsWhenSecondIsGreaterThanFirst([0, 1, 1, 0, 1, 1], [1, 0, 0, 0, 0, 0]).sumResultcomplement2).toStrictEqual([1, 0, 0, 0, 1, 0, 1])
});

test('Substracts 10000 and 100000 correctly', () => {
    expect(SubsWhenSecondIsGreaterThanFirst([0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0]).sumResultcomplement2).toStrictEqual([1, 0, 1, 0, 0, 0, 0])
});
