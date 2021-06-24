import {MakeStringFromPlacesInArr} from '../../../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr';

interface ifFoundAndPlaceWhereItNeedsIt {
    found: boolean,
    placeWhereItIsNeeded: number
}

export const IsThereAPlaceNeedingCarry = (carry: number[], number1: number[], number2: number[], lastPositionHandled: number): ifFoundAndPlaceWhereItNeedsIt => {
    let rules = new Map()
    rules.set('001', {carryNecessary: true})
    rules.set('011', {carryNecessary: false})
    rules.set('201', {carryNecessary: false})
    rules.set('101', {carryNecessary: false})
    rules.set('000', {carryNecessary: false})
    rules.set('010', {carryNecessary: false})
    rules.set('100', {carryNecessary: false})

    let booleanInRules = false

    let objectToReturn: ifFoundAndPlaceWhereItNeedsIt = {
        found: false,
        placeWhereItIsNeeded: -1
    }
    for (let i = lastPositionHandled; i > 0; i--) {
        let placeInArrayKey = MakeStringFromPlacesInArr(carry[i], number1[i], number2[i])
        console.log(placeInArrayKey)
        let rulesObj = rules.get(placeInArrayKey)
        booleanInRules = rulesObj.carryNecessary
        if (booleanInRules) {
            objectToReturn.found = true
            objectToReturn.placeWhereItIsNeeded = i
            break
        }
    }
    return objectToReturn
}
