import {IsThereAPlaceNeedingCarry} from './IsThereAPlaceNeedingCarry';

test('Returns info about where it is needed correctly when 10101 and 01010', () => {
    const carry = [0, 0, 0, 0, 0]
    const number1 = [1, 0, 1, 0, 1]
    const number2 = [0, 1, 0, 1, 0]
    expect(IsThereAPlaceNeedingCarry(carry, number1, number2, number1.length - 1).placeWhereItIsNeeded).toBe(3)
})
test('Returns info if it is needed correctly when 10101 and 01010', () => {
    const carry = [0, 0, 0, 0, 0]
    const number1 = [1, 0, 1, 0, 1]
    const number2 = [0, 1, 0, 1, 0]
    expect(IsThereAPlaceNeedingCarry(carry, number1, number2, number1.length - 1).found).toBe(true)
})
