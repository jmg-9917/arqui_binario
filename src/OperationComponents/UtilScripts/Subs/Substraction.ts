import {MakeBinaryNumberFromArray} from '../MakeBinaryNumberFromArray/MakeBinaryNumberFromArray';

const Subs = (number1: number[], number2: number[]): number[] => {
    const binToNumber1 = MakeBinaryNumberFromArray(number1)
    const binToNumber2 = MakeBinaryNumberFromArray(number2)
    if (binToNumber2 > binToNumber1) {
        return [1]
    } else {
        return [0]
    }
}
