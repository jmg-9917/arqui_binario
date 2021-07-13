import {carryLoop} from "./CarryManipulationProcess/CarryManipulationProcess"

interface ArraysForRundown {
    newCarry: number[],
    newNumber1: number[],
    newNumber2: number[]
}

export const ArrManipulationProcessObject = (lastPlaceKnownToMissCarryValue: number, carry: number[], number1: number[], number2: number[]): ArraysForRundown => {
    let oneFoundInArr = false
    let positionForSwap = 0
    for (let i = lastPlaceKnownToMissCarryValue; i > 0; i--) {
        if (number1[i] === 1) {
            positionForSwap = i
            oneFoundInArr = true
            break
        } else {
            continue
        }
    }
    number1[positionForSwap] -= 1
    carry[positionForSwap + 1] = 2
    positionForSwap += 2
    let pointerForRun = 0
    const newCarry = carryLoop(0, lastPlaceKnownToMissCarryValue, carry, number1, number2)
    return {
        newCarry: newCarry,
        newNumber1: number1,
        newNumber2: number2
    }
}
