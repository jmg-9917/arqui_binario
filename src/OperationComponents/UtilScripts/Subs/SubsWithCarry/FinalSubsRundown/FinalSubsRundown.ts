import {MakeStringFromPlacesInArr} from '../../../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr';
import {IsThereAPlaceNeedingCarry} from '../IsThereAPlaceNeedingCarry/IsThereAPlaceNeedingCarry';
import {carryLoop} from '../ArrManipulationProcessObject/CarryManipulationProcess/CarryManipulationProcess';
export const FinalSubsRundown = (carry: number[], number1: number[], number2: number[]): number[] => {
    let rules = new Map()
    rules.set('011', {resultNum: 0})
    rules.set('201', {resultNum: 1})
    rules.set('101', {resultNum: 0})
    rules.set('000', {resultNum: 0})
    rules.set('100', {resultNum: 1})
    rules.set('001', {resultNum: 0})
    rules.set('010', {resultNum: 1})
    let result = []
    for (let i = number1.length - 1; i > 0; i--) {
        let needsCarryObj = IsThereAPlaceNeedingCarry(carry, number1, number2, i)
        if (needsCarryObj.found) {
            let newArrays = carryLoop(0, needsCarryObj.placeWhereItIsNeeded, carry, number1, number2)
            carry = newArrays.newCarry
            number1 = newArrays.newNumber1
        } else {

        }
    }
    for (let i = number1.length - 1; i >= 0; i--) {
        let placesString = MakeStringFromPlacesInArr(carry[i], number1[i], number2[i])
        let needsCarryObj = IsThereAPlaceNeedingCarry(carry, number1, number2, i)
        if (needsCarryObj.found) {
            let newArrays = carryLoop(0, needsCarryObj.placeWhereItIsNeeded, carry, number1, number2)
            carry = newArrays.newCarry
            number1 = newArrays.newNumber1
        } else {
            let valueFromRules = rules.get(placesString).resultNum

            result.unshift(valueFromRules)

        }
    }
    console.log(result)
    return result

}
