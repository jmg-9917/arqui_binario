import {LevelArrays} from './LevelArrays';

test('Levels arrays when the first is longer', () => {
    let secondNum = [0, 0, 0, 0, 1]
    expect(LevelArrays([1, 1, 0, 0, 0], [1]).num2).toStrictEqual(secondNum)
});

test('Arrays are of equal length', () => {

    expect(LevelArrays([1, 1, 1, 1], [1, 1, 1, 1]).num1).toStrictEqual([1, 1, 1, 1])
    expect(LevelArrays([1, 1, 1, 1], [1, 1, 1, 1]).num2).toStrictEqual([1, 1, 1, 1])
});

test('Levels arrays when the second is longer', () => {
    let firstNum = [0, 0, 0, 0, 1]
    expect(LevelArrays([1], [1, 1, 0, 0, 0]).num1).toStrictEqual(firstNum)
});
