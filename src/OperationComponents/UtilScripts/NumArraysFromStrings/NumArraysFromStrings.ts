export const NumArraysFromStrings = (number1: string, number2: string) => {
    const bin1Str = number1.split("");
    const bin2Str = number2.split("");
    let bin1Num = [];
    let bin2Num = [];
    for (let a in bin1Str) {bin1Num.push(parseInt(bin1Str[a]))}
    for (let b in bin2Str) {bin2Num.push(parseInt(bin2Str[b]))}

    return {
        num1: bin1Num,
        num2: bin2Num
    }
}

