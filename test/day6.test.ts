import {parseInput, traverse, obstruct} from "../src/day6/day6";

describe('Day 6:', () => {
    test('parses the input file into two 2d arrays', () => {
        const map = parseInput('sample');
        expect(map).toBeInstanceOf(Array<Array<string>>);
    });
    test('traverses the map in the correct path', () => {
        expect(traverse(parseInput('sample'))).toBe(41);
    });
    test.skip('identifies the correct number of loop-causing obstacles', () => {
        expect(obstruct(parseInput('sample'))).toBe(6);
    });
});