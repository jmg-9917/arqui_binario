import {MakeStringFromPlacesInArr} from '../../../MakeStringFromPlacesInArr/MakeStringFromPlacesInArr';
import rules from './rules';
interface ifFoundAndPlaceWhereItNeedsIt {
    found: boolean,
    placeWhereItIsNeeded: number
}

export const IsThereAPlaceNeedingCarry = (carry: number[], number1: number[], number2: number[], lastPositionHandled: number): ifFoundAndPlaceWhereItNeedsIt => {
    let booleanInRules = false

    let objectToReturn: ifFoundAndPlaceWhereItNeedsIt = {
        found: false,
        placeWhereItIsNeeded: -1
    }
    for (let i = lastPositionHandled; i > 0; i--) {
        let placeInArrayKey = MakeStringFromPlacesInArr(carry[i], number1[i], number2[i])
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
