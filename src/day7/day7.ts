import fs from "node:fs";

export function parseInput(filename: string): number[][] {
    const data: string = fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
    const rows: string[] = data.split(/\r\n/);
    return rows.map((columns) => columns.split(/\D+/).map((value) => parseInt(value)));
}

export function sumCalibrations(input: number[][]): number {
    let output = 0;

    input.forEach((row) => {
        const calibration = row.shift() as number;
        let trial = 0;
        let operators: Array<'+'|'*'> | false = new Array(row.length - 1).fill('+');

        while (operators) {
            trial = row[0];
            operators.forEach((operator, index) => {
                if (operator === '+') {
                    trial += row[index + 1]
                }
                if (operator === '*') {
                    trial *= row[index + 1]
                }
            })
            operators = incrementOperators(operators);
            if (trial === calibration) {
                output += calibration;
                operators = false;
            }
        }
    });

    return output;
}

export function incrementOperators(operators: Array<'+'|'*'>): Array<'+'|'*'> | false {
    if (! operators.includes('+')) {
        return false;
    }
    const index = operators.findLastIndex((element) => element === '+');
    operators[index] = '*';
    if (index + 1 < operators.length) {
        operators[index + 1] = '+';
    }
    return operators;
}