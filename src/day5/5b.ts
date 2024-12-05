import {parseInput, sumFixedMiddlePages} from "./day5";

const [rules, updates] = [...parseInput('day5')];
console.log(sumFixedMiddlePages(rules, updates));