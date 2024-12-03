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

export function processWithConditionals(input: string): number {
    const matches = input.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);
    let total = 0;
    let active = true;
    matches?.forEach((match: string) => {
        const command = match.split('(')[0];
        switch (command) {
            case "do":
                active = true;
                break;
            case "don't":
                active = false;
                break;
            case "mul":
                if (active) {
                    const [x, y] = match.slice(4, -1).split(',');
                    total += parseInt(x) * parseInt(y);
                }
        }
    })
    return total;
}

export function parseInput(filename: string): string {
    return fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
}