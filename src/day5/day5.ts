import fs from "node:fs";

export function parseInput(filename: string): number[][][] {
    const data: string = fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
    const [rulesRaw, updatesRaw] = [...data.split(/\r\n\r\n/)];
    const rules: number[][] = rulesRaw.split(/\r\n/).map((columns) => columns.split('|').map((cell) => parseInt(cell)));
    const updates: number[][] = updatesRaw.split(/\r\n/).map((columns) => columns.split(',').map((cell) => parseInt(cell)));
    return [rules, updates];
}

export function sumMiddlePages(rules: number[][], updates: number[][]): number {
    let total = 0;

    updates.forEach((update) => {
        if (isValid(rules, update)) {
            total += update[(update.length -1) / 2]
        }
    })

    return total;
}

export function sumFixedMiddlePages(rules: number[][], updates: number[][]): number {
    let total = 0;

    updates.forEach((update) => {
        if (!isValid(rules, update)) {
            update = sortUpdate(rules, update);
            total += update[(update.length -1) / 2];
        }
    })

    return total;
}

function isValid(rules: number[][], update: number[]): boolean {
    let valid = true;
    rules.forEach((rule) => {
        if (update.includes(rule[0]) && update.includes(rule[1])) {
            if (update.indexOf(rule[0]) > update.indexOf(rule[1])) {
                valid = false;
            }
        }
    })
    return valid;
}

function sortUpdate(rules: number[][], update: number[]): number[] {
    rules.forEach((rule) => {
        const [a, b] = rule;
        if (update.includes(a) && update.includes(b)) {
            if (update.indexOf(a) > update.indexOf(b)) {
                update[update.indexOf(a)] = b;
                update[update.indexOf(b)] = a;
                update = sortUpdate(rules, update);
            }
        }
    });
    return update;
}
