import {MakeStringFromPlacesInArr} from '../../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr';
import {ArrManipulationProcessObject} from './ArrManipulationProcessObject/ArrManipulationProcessObject';
import {FinalSubsRundown} from './FinalSubsRundown/FinalSubsRundown';
import {LevelArrays} from '../../LevelArrays/LevelArrays';
export const SubsWithCarry = (number1: number[], number2: number[]): number => {
    let rules = new Map()
    rules.set('001', {carryNecessary: true})
    rules.set('011', {carryNecessary: false})
    rules.set('201', {carryNecessary: false})
    rules.set('101', {carryNecessary: false})
    rules.set('000', {carryNecessary: false})

    let carry = new Array(number1.length).fill(0)
    let booleanInRules = false
    let startingPosition = 0


    if (booleanInRules) {
        console.log('need carry and number manipulation')
        const newArrays = ArrManipulationProcessObject(placeThatNeedsCarryValue, carry, number1, number2)
        const result = FinalSubsRundown(newArrays.newCarry, newArrays.newNumber1, newArrays.newNumber2)
        const leveledResult = LevelArrays(number2, result).num2
        console.log(newArrays.newCarry)
        console.log(newArrays.newNumber1)
        console.log(newArrays.newNumber2)
        console.log(leveledResult)

    } else {
        console.log('perform operation run for steps')
        const result = FinalSubsRundown(carry, number1, number2)
        const leveledResult = LevelArrays(number2, result).num2
        console.log(carry)
        console.log(number1)
        console.log(number2)
        console.log(leveledResult)

    }





    return placeThatNeedsCarryValue

}

