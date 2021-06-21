import {Complement1} from "../Complement1/Complement1";
import {LevelArrays} from "../../LevelArrays/LevelArrays";
import {Sum} from "../../Sum/Sum";

export const Complement2 = (numberToConvert: number[]): number[] => {
    if (numberToConvert.length === 0) {
        return [0]
    }
    else {
        const complement1 = Complement1(numberToConvert)
        const one = [1]
        const leveledArraysForSum = LevelArrays(complement1, one)
        const sum = Sum(leveledArraysForSum.num1, leveledArraysForSum.num2)
        const sumResult = sum.result
        return sumResult

    }

}
