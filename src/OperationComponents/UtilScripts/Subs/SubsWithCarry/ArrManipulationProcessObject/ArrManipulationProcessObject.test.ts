import {ArrManipulationProcessObject} from './ArrManipulationProcessObject';

test('Makes arrays correctly if passed with 10000 and 100', () => {
    const lastPlace = 2
    const carry = [0, 0, 0, 0, 0]
    const num1 = [1, 0, 0, 0, 0]
    const num2 = [0, 0, 1, 0, 0]
    const newCarry = [0, 1, 2, 0, 0]
    expect(ArrManipulationProcessObject(lastPlace, carry, num1, num2).newCarry).toStrictEqual(newCarry)
})

