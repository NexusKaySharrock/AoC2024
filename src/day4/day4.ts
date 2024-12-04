import fs from "node:fs";

export function parseInput(filename: string): string[][] {
    const data: string = fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
    const rows: string[] = data.split(/\r\n/);
    return rows.map((columns) => columns.split(''));
}

export function search(matrix: string[][]): number {
    let count = 0;

    matrix.forEach((row, i) => {
        row.forEach((column, j) => {
            if (column === 'X') {
                // N
                if (i >= 3) {
                    if (
                        matrix[i-1][j] === 'M' &&
                        matrix[i-2][j] === 'A' &&
                        matrix[i-3][j] === 'S'
                    ) {
                        count++
                    }
                }
                // NE
                if (i >= 3 && j < row.length - 3) {
                    if (
                        matrix[i-1][j+1] === 'M' &&
                        matrix[i-2][j+2] === 'A' &&
                        matrix[i-3][j+3] === 'S'
                    ) {
                        count++
                    }
                }
                // E
                if (j < row.length - 3) {
                    if (
                        matrix[i][j+1] === 'M' &&
                        matrix[i][j+2] === 'A' &&
                        matrix[i][j+3] === 'S'
                    ) {
                        count++
                    }
                }
                // SE
                if (i < matrix.length - 3 && j < row.length - 3) {
                    if (
                        matrix[i+1][j+1] === 'M' &&
                        matrix[i+2][j+2] === 'A' &&
                        matrix[i+3][j+3] === 'S'
                    ) {
                        count++
                    }
                }
                // S
                if (i < matrix.length - 3) {
                    if (
                        matrix[i+1][j] === 'M' &&
                        matrix[i+2][j] === 'A' &&
                        matrix[i+3][j] === 'S'
                    ) {
                        count++
                    }
                }
                // SW
                if (i < matrix.length - 3 && j >= 3) {
                    if (
                        matrix[i+1][j-1] === 'M' &&
                        matrix[i+2][j-2] === 'A' &&
                        matrix[i+3][j-3] === 'S'
                    ) {
                        count++
                    }
                }
                // W
                if (j >= 3) {
                    if (
                        matrix[i][j-1] === 'M' &&
                        matrix[i][j-2] === 'A' &&
                        matrix[i][j-3] === 'S'
                    ) {
                        count++
                    }
                }
                // NW
                if (i >=  3 && j >= 3) {
                    if (
                        matrix[i-1][j-1] === 'M' &&
                        matrix[i-2][j-2] === 'A' &&
                        matrix[i-3][j-3] === 'S'
                    ) {
                        count++
                    }
                }
            }
        })
    })
    return count;
}

export function search2(matrix: string[][]): number {
    let count = 0;

    matrix.forEach((row, i) => {
        if (0 < i && i < matrix.length - 1) {
            row.forEach((column, j) => {
                if (0 < j && j < row.length - 1 && column === 'A') {
                    if (
                        matrix[i-1][j-1] === 'S' &&
                        matrix[i-1][j+1] === 'S' &&
                        matrix[i+1][j+1] === 'M' &&
                        matrix[i+1][j-1] === 'M'
                    ) {
                        count++
                    }
                    if (
                        matrix[i-1][j-1] === 'M' &&
                        matrix[i-1][j+1] === 'S' &&
                        matrix[i+1][j+1] === 'S' &&
                        matrix[i+1][j-1] === 'M'
                    ) {
                        count++
                    }
                    if (
                        matrix[i-1][j-1] === 'M' &&
                        matrix[i-1][j+1] === 'M' &&
                        matrix[i+1][j+1] === 'S' &&
                        matrix[i+1][j-1] === 'S'
                    ) {
                        count++
                    }
                    if (
                        matrix[i-1][j-1] === 'S' &&
                        matrix[i-1][j+1] === 'M' &&
                        matrix[i+1][j+1] === 'M' &&
                        matrix[i+1][j-1] === 'S'
                    ) {
                        count++
                    }
                }
            })
        }
    })

    return count;
}