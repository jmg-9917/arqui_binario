import {FinalSubsRundown} from './FinalSubsRundown';

test('Substracts 101010 and 010101 correctly', () => {
    const carry = [0, 0, 0, 0, 0, 0]
    const num1 = [1, 0, 1, 0, 1, 0]
    const num2 = [0, 1, 0, 1, 0, 1]
    expect(FinalSubsRundown(carry, num1, num2)).toStrictEqual([0, 1, 0, 1, 0, 1])
})
test('Substracts 10000 and 00001 correctly', () => {
    const carry = [0, 0, 0, 0, 0]
    const num1 = [1, 0, 0, 0, 0]
    const num2 = [0, 0, 0, 0, 1]

    expect(FinalSubsRundown(carry, num1, num2)).toStrictEqual([0, 1, 1, 1, 1])
})
