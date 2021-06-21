import {MakeStringFromPlacesInArr} from "../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr";

interface SumParts {
    carry: number[],
    num1: number[],
    num2: number[],
    result: number[]
}

export const Sum = (number1: number[], number2: number[]): SumParts => {
    let rules = new Map()
    rules.set("010", {carry: 0, resultNumber: 1})
    rules.set("100", {carry: 0, resultNumber: 1})
    rules.set("001", {carry: 0, resultNumber: 1})
    rules.set("101", {carry: 1, resultNumber: 0})
    rules.set("011", {carry: 1, resultNumber: 0})
    rules.set("110", {carry: 1, resultNumber: 0})
    rules.set("111", {carry: 1, resultNumber: 1})
    rules.set("000", {carry: 0, resultNumber: 0})

    let onePlace = new Map()
    onePlace.set('000', {resultNumber: [0]})
    onePlace.set('010', {carry: 0, resultNumber: [1]})
    onePlace.set('001', {carry: 0, resultNumber: [1]})
    onePlace.set('011', {carry: 1, resultNumber: [1, 0]})
    let carry = [0]
    let result = []
    let j = 0

    if (number1.length - 1 === 0 && number2.length - 1 === 0) {
        let column = MakeStringFromPlacesInArr(carry[0], number1[0], number2[0])
        result = onePlace.get(column).resultNumber
        return result
    } else {
        for (let i = number1.length - 1; i >= 0; i--) {
            let column = MakeStringFromPlacesInArr(carry[j], number1[i], number2[i])
            carry.unshift(rules.get(column).carry)
            result.unshift(rules.get(column).resultNumber)
        }
        number1.unshift(0)
        number2.unshift(0)
        let lastColumn = MakeStringFromPlacesInArr(carry[0], number1[0], number2[0])
        carry.unshift(rules.get(lastColumn).carry)
        result.unshift(rules.get(lastColumn).resultNumber)
        if (result[0] === 0) {result.shift()}

        return {
            carry: carry,
            num1: number1,
            num2: number2,
            result: result
        }
    }
}

