import {countSafe, countSafeWithDampener, parseInput} from '../src/day2/day2';

const matrix = [[7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]];

describe('Day 2:', () => {
    test('parses the input file into two correct arrays', () => {
        expect(parseInput('sample')).toEqual(matrix);
    });
    test('correctly counts the safe reports', () => {
        expect(countSafe(matrix)).toBe(2);
    });
    test('correctly counts the safe reports with the dampener', () => {
        expect(countSafeWithDampener(matrix)).toBe(4);
    })
});