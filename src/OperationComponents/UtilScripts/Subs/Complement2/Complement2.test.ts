import {Complement2} from "./Complement2";

test('Converts [1,0,1,0] into [0,1,1,0]', () => {
    expect(Complement2([1, 0, 1, 0])).toStrictEqual([0, 1, 1, 0])
})
