import {Sum} from '../../Sum/Sum';
import {Complement2} from '../Complement2/Complement2';
import {LevelArrays} from '../../LevelArrays/LevelArrays';
interface Sum {
    carry: number[],
    num1: number[],
    num2: number[],
    result: number[]
}
export const SubsWhenSecondIsGreaterThanFirst = (number1: number[], number2: number[]): {secondComplement2: number[], sum: Sum, sumResultcomplement2: number[]} => {
    const secondComplement2 = Complement2(number2)
    const leveledArrays = LevelArrays(secondComplement2, number1)
    const sumResult = Sum(leveledArrays.num1, leveledArrays.num2)
    let sumResultcomplement2 = Complement2(sumResult.result)
    sumResultcomplement2.unshift(1)
    return {
        secondComplement2: secondComplement2,
        sum: sumResult,
        sumResultcomplement2: sumResultcomplement2
    }
}
