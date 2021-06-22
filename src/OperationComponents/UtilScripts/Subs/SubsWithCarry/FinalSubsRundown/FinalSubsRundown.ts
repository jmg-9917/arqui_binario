import {MakeStringFromPlacesInArr} from '../../../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr';

export const FinalSubsRundown = (carry: number[], number1: number[], number2: number[]): number[] => {
    let rules = new Map()
    rules.set('011', {resultNum: 0})
    rules.set('201', {resultNum: 1})
    rules.set('101', {resultNum: 0})
    rules.set('000', {resultNum: 0})
    rules.set('100', {resultNum: 1})

    let result = []
    for (let i = number1.length - 1; i > 0; i--) {
        let placesString = MakeStringFromPlacesInArr(carry[i], number1[i], number2[i])
        let valueFromRules = rules.get(placesString).resultNum
        result.unshift(valueFromRules)
    }
    return result

}
