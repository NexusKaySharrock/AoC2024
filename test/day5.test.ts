import {parseInput, sumMiddlePages, sumFixedMiddlePages} from "../src/day5/day5";

describe('Day 5:', () => {
    test('parses the input file into two 2d arrays', () => {
        const [rules, updates] = [...parseInput('sample')];
        expect(rules).toBeInstanceOf(Array<Array<number>>);
        expect(updates).toBeInstanceOf(Array<Array<number>>);
    });
    test('correctly sums the middle page numbers', () => {
        const [rules, updates] = [...parseInput('sample')];
        expect(sumMiddlePages(rules, updates)).toBe(143);
    });
    test('correctly sums the fixed middle page numbers', () => {
        const [rules, updates] = [...parseInput('sample')];
        expect(sumFixedMiddlePages(rules, updates)).toBe(123);
    });
});