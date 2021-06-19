export const LevelArrays = (numberArr1: number[], numberArr2: number[]) => {
    if (numberArr1.length !== 0 && numberArr2.length !== 0) {
        if (numberArr1.length === numberArr2.length) {
            return {
                num1: numberArr1,
                num2: numberArr2
            }
        } else {
            let difference = numberArr1.length - numberArr2.length
            if (difference > 0) {
                for (let i = 0; i < difference; i++) {
                    numberArr2.unshift(0)
                }
            } else {
                for (let j = 0; j > difference; j--) {
                    numberArr1.unshift(0)
                }
            }
            return {
                num1: numberArr1,
                num2: numberArr2
            }

        }
    } else {
        return {
            num1: [0],
            num2: [0]
        }
    }
}

