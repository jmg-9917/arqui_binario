interface CarryManipulationProcessObject {
    newCarry: number[],
    newNumber1: number[]
}
export const carryLoop = (positionForSwap: number, lastPlaceKnownToMissCarryValue: number, carry: number[], number1: number[], number2: number[]): CarryManipulationProcessObject => {

    if (lastPlaceKnownToMissCarryValue === number1.length - 1) {
        for (let j = positionForSwap; j <= lastPlaceKnownToMissCarryValue - 1; j++) {
            if (number1[j] === 0) {
                carry[j + 1] = 2
                carry[j] -= 1
            }
            else {
                if (carry[j] === 0) {
                    carry[j] += 1
                }
                carry[j] -= 1
                carry[j + 1] = 2
                number1[j] -= 1
            }
        }
    }
    else {
        for (let j = positionForSwap; j < lastPlaceKnownToMissCarryValue; j++) {
            if (number1[j] === 0) {
                carry[j + 1] = 2
                carry[j] -= 1
            }
            else {
                if (carry[j] === 0) {
                    carry[j] += 1
                }
                carry[j] -= 1
                carry[j + 1] = 2
                number1[j] -= 1
            }
        }


    }

    return {
        newCarry: carry,
        newNumber1: number1
    }
}
