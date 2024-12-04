import {search, parseInput} from "../src/day4/day4";

describe('Day 4:', () => {
    test('parses the input file into a matrix and counts correctly', () => {
        expect(search(parseInput('sample'))).toBe(18);
    });
});