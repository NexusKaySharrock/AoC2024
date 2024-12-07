import {incrementOperators, parseInput, sumCalibrations} from "../src/day7/day7";

describe('Day 7:', () => {
    test('parses the input file into two 2d arrays of numbers', () => {
        expect(parseInput('sample')).toBeInstanceOf(Array<Array<number>>);
    });
    test('correctly sums the test values of valid calibrations', () => {
        expect(sumCalibrations(parseInput('sample'))).toEqual(3749);
    });
    test('correctly increments the operator array', () => {
        expect(incrementOperators(['+'])).toEqual(['*']);
        expect(incrementOperators(['*'])).toBe(false);
        expect(incrementOperators(['+','+'])).toEqual(['+','*']);
        expect(incrementOperators(['+','*'])).toEqual(['*','+']);
        expect(incrementOperators(['*','+'])).toEqual(['*','*']);
        expect(incrementOperators(['*','*'])).toBe(false);
    })
});