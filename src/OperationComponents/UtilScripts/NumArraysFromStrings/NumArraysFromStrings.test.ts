import {NumArraysFromStrings} from './NumArraysFromStrings';

test('When two valid strings are converted properly it returns an object with two arrays.', () => {
    let ArraysObject = NumArraysFromStrings('1010', '1010')
    let number1 = ArraysObject.num1
    let number2 = ArraysObject.num2
    expect(NumArraysFromStrings('1010', '1010').num1).toStrictEqual(number1)
    expect(NumArraysFromStrings('1010', '1010').num2).toStrictEqual(number2)
})
