import {search, search2, parseInput} from "../src/day4/day4";

describe('Day 4:', () => {
    test('parses the input file into a matrix and counts xmas correctly', () => {
        expect(search(parseInput('sample'))).toBe(18);
    });
    test('parses the input file into a matrix and counts x-mas correctly', () => {
        expect(search2(parseInput('sample'))).toBe(9);
    });
});