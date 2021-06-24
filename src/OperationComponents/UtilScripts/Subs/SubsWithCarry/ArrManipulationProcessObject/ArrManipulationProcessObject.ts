
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
    for (let j = positionForSwap; j < lastPlaceKnownToMissCarryValue - 1; j++) {
        carry[positionForSwap] -= 1
        carry[positionForSwap + 1] = 2
        number1[positionForSwap] -= 1
        if (number1[positionForSwap] === 0) {
            pointerForRun = positionForSwap
            break
        }
        carry[positionForSwap] -= 1

    }
    console.log(pointerForRun)
    return {
        newCarry: carry,
        newNumber1: number1,
        newNumber2: number2
    }
}
