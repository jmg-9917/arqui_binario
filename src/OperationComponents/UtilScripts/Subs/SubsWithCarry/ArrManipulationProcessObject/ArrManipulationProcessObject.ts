
interface ArraysForFinalRundown {
    newCarry: number[],
    newNumber1: number[],
    newNumber2: number[]
}

export const ArrManipulationProcessObject = (lastPlaceKnownToMissCarryValue: number, carry: number[], number1: number[], number2: number[]): ArraysForFinalRundown => {
    let oneFoundInArr = false
    let positionForSwap = 0
    for (let i = lastPlaceKnownToMissCarryValue - 1; i > 0; i--) {
        if (number1[i] === 1) {
            positionForSwap = i
            oneFoundInArr = true
            break
        } else {continue}
    }
    number1[positionForSwap] -= 1
    carry[positionForSwap + 1] = 2
    positionForSwap += 1
    for (let j = positionForSwap; j < lastPlaceKnownToMissCarryValue; j++) {
        carry[positionForSwap] -= 1
        carry[positionForSwap + 1] = 2
    }
    return {
        newCarry: carry,
        newNumber1: number1,
        newNumber2: number2
    }
}
