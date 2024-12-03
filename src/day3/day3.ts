import fs from "node:fs";

export function process(input: string): number {
    const matches = input.match(/mul\(\d{1,3},\d{1,3}\)/g);
    let total = 0;
    matches?.forEach((match: string) => {
        const [x, y] = match.slice(4, -1).split(',');
        total += parseInt(x) * parseInt(y);
    })
    return total;
}

export function parseInput(filename: string): string {
    return fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
}