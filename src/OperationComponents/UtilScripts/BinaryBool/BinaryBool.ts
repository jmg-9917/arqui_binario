
export const BinaryBool = (input: string) => {
    const charArray = input.split("")
    if (charArray.length !== 0) {
        for (let letter in charArray) {
            try {
                let numberEquiv = parseInt(charArray[letter])
                if (numberEquiv !== 0 && numberEquiv !== 1) {
                    return false
                }
            }
            catch {
                return false;
            }
        }
        return true

    }
    else {
        return false
    }
}

