export const Complement1 = (numberToConvert: number[]): number[] => {
    if (numberToConvert.length === 0) {
        return [0]
    } else {
        let complement1 = []
        for (let a in numberToConvert) {
            let substitute = (numberToConvert[a] === 1) ? 0 : 1
            complement1.push(substitute)
        }
        return complement1

    }
}
