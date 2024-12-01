import {findDistance} from './findDistance';

const listA: number[] = [3,4,2,1,3,3];
const listB: number[] = [4,3,5,3,9,3];

describe('Day 1:', () => {
    test('correctly sums the differences between the two lists', () => {
        expect(findDistance(listA,listB)).toBe(11);
    });
});