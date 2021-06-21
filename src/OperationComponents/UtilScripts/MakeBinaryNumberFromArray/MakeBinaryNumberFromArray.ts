export const MakeBinaryNumberFromArray = (numberToConvert: number[]): number => {
    if (numberToConvert.length === 0) {
        return 0
    }
    const allValuesOnOneString = numberToConvert.join("")
    try {
        const result = parseInt(allValuesOnOneString, 2)
        return result
    } catch (e) {
        console.log(e)
        return 0
    }
}
