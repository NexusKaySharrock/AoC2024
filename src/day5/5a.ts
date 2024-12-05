import {parseInput, sumMiddlePages} from "./day5";

const [rules, updates] = [...parseInput('day5')];
console.log(sumMiddlePages(rules, updates));