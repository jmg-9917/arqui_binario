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
    rules.set('010', {carryNecessary: false})

    let carry = new Array(number1.length).fill(0)
    let booleanInRules = false
    let startingPosition = 0

    for (let i in number1) {
        let numberSet = MakeStringFromPlacesInArr(carry[i], number1[i], number2[i])
        let ruleObjectChosen = rules.get(numberSet)
        if (ruleObjectChosen.carryNecessary === true) {
            booleanInRules = true
            break
        }
    }

    if (booleanInRules) {
        console.log('need carry and number manipulation')

    } else {
        console.log('perform operation run for steps')
        const result = FinalSubsRundown(carry, number1, number2)
        const leveledResult = LevelArrays(number2, result).num2
        console.log(carry)
        console.log(number1)
        console.log(number2)
        console.log(leveledResult)

    }


    console.log(booleanInRules)

    return 0

}

