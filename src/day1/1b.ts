import {findSimilarity, parseInput} from './findDistance';

console.log(findSimilarity(...parseInput('day1') as [[number], [number]]));