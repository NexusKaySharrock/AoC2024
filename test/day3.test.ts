import {process, parseInput} from "../src/day3/day3";

const sample = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

describe('Day 3:', () => {
    test('parses the input file into the correct string', () => {
        expect(parseInput('sample')).toEqual(sample);
    });
    test('correctly cleans and processes the input', () => {
        expect(process(sample)).toBe(161);
    });
});