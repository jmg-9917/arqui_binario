import {carryLoop} from './CarryManipulationProcess';

test('Makes moves correctly if 10000 and 100 are being substracted.', () => {
    const num1 = [0, 0, 0, 0]
    const num2 = [0, 0, 1, 0]
    const carry = [0, 2, 0, 0]
    expect(carryLoop(1, 2, carry, num1, num2).newCarry).toStrictEqual([0, 1, 2, 0])
})
test('Makes moves correctly if 10000 and 1 are being substracted.', () => {
    const num1 = [1, 0, 0, 0, 0]
    const num2 = [0, 0, 0, 0, 1]
    const carry = [0, 0, 0, 0, 0]

    const probe = [0, 1, 1, 1, 2]
    expect(carryLoop(0, 4, carry, num1, num2).newCarry).toStrictEqual(probe)
})
test('Makes moves correctly if 10101 and 10 are being substracted.', () => {
    const num1 = [1, 0, 1, 0, 1]
    const num2 = [0, 0, 0, 1, 0]
    const carry = [0, 0, 0, 0, 0]

    const probe = [0, 1, 1, 2, 0]
    expect(carryLoop(0, 3, carry, num1, num2).newCarry).toStrictEqual(probe)
})
test('Makes moves correctly if 10101 and 01010 are being substracted.', () => {
    const num1 = [1, 0, 1, 0, 1]
    const num2 = [0, 1, 0, 1, 0]
    const carry = [0, 0, 0, 0, 0]

    const probe = [0, 0, 0, 2, 0]
    expect(carryLoop(2, 3, carry, num1, num2).newCarry).toStrictEqual(probe)
})
