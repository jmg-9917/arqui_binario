import {MakeStringFromPlacesInArray} from '../../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr';

export const SubsWithCarry = (number1: number[], number2: number[]) => {
    let rules = new Map()
    rules.set('001', {carryNecessary: true})
    rules.set('011', {carryNecessary: false, resultNum: 0})
    rules.set('201', {carryNecessary: false, resultNum: 1})
    rules.set('101', {carryNecessary: false, resultNum: 0})
    rules.set('000', {carryNecessary: false, resultNum: 0})

    let originalNumbers = {
        number1: number1,
        number2: number2
    }
    let findCarryFlag = false
    let carry = new Array(number1.length - 1).fill(0)
    for (let i = number1.length - 1; i < 0; i--) {
        let placeInArrayKey = MakeStringFromPlacesInArray(carry[i], number1[i], number2[i])
        if (rules.get(placeInArrayKey)) {
            findCarryFlag = true
        }
    }


}

