import fs from 'node:fs';

function findDistance(listA: number[], listB: number[]): number {
    const sortedA = listA.sort((x, y) => x - y);
    const sortedB = listB.sort((x, y) => x - y);

    return sortedA.reduce((total, currentValue, currentIndex) => {
        return total + compareElements(currentValue, sortedB[currentIndex]);
    }, 0);
}

function findSimilarity(listA: number[], listB: number[]): number {
    const sortedA = listA.sort((x, y) => x - y);
    const sortedB = listB.sort((x, y) => x - y);

    return sortedA.reduce((total, currentValue) => {
        return total + currentValue * sortedB.filter((item) => item === currentValue).length;
    }, 0);
}

function compareElements(a: number, b: number): number {
    return Math.abs(a - b);
}

function parseInput(filename: string) {
    const data: string = fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
    const dataArray: string[] = data.split(/\r\n/);
    const data2dArray: string[][] = dataArray.map((row) => row.split(/\s+/));
    return data2dArray[0].map((_, column) => data2dArray.map(row => parseInt(row[column])));
}

export {findDistance, findSimilarity, parseInput};