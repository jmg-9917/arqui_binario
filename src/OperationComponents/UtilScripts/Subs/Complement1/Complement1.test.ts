import {Complement1} from './Complement1';

test('Makes array [1,0,1,0,1] into [0,1,0,1,0] correctly', () => {
    expect(Complement1([1, 0, 1, 0, 1])).toStrictEqual([0, 1, 0, 1, 0])
});

test('Returns [0] when array is empty', () => {
    expect(Complement1([])).toStrictEqual([0])
})
