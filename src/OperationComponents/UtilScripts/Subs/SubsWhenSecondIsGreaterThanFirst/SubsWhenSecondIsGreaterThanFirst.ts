import {Sum} from '../../Sum/Sum';
import {Complement2} from '../Complement2/Complement2';
import {LevelArrays} from '../../LevelArrays/LevelArrays';
export const SubsWhenSecondIsGreaterThanFirst = (number1: number[], number2: number[]): number[] => {
    const secondComplement2 = Complement2(number2)
    const leveledArrays = LevelArrays(secondComplement2, number1)
    const sumResult = Sum(leveledArrays.num1, leveledArrays.num2)
    let sumResultcomplement2 = Complement2(sumResult)
    sumResultcomplement2.unshift(1)
    return sumResultcomplement2

}
