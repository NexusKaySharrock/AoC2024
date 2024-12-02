import fs from 'node:fs';

function countSafe(matrix: number[][]): number {
    let safeReports = 0;

    matrix.forEach((report) => {
        let decreases = 0;
        let increases = 0;
        let leaps = 0;
        report.forEach((level, index, array) => {
            const previous = array[index - 1];
            if (index > 0) {
                if (level > previous) {
                    increases++
                }
                if (level < previous) {
                    decreases++
                }
                if (Math.abs(level - previous) > 3) {
                    leaps++
                }
            }
        })
        if (leaps === 0 && (decreases === 0 && increases === report.length - 1 || increases === 0 && decreases === report.length - 1)) {
            safeReports++
        }
    })

    return safeReports;
}

function countSafeWithDampener(matrix: number[][]): number {
    let safeReports = 0;

    matrix.forEach((report) => {
        let decreases = 0;
        let increases = 0;
        let leaps = 0;
        report.forEach((level, index, array) => {
            const previous = array[index - 1];
            if (index > 0) {
                if (level > previous) {
                    increases++
                }
                if (level < previous) {
                    decreases++
                }
                if (Math.abs(level - previous) > 3) {
                    leaps++
                }
            }
        })
        if (leaps === 0 && (decreases === 0 && increases === report.length - 1 || increases === 0 && decreases === report.length - 1)) {
            safeReports++
        } else {
            let dampenedReports: number[][] = [];
            report.forEach((level, index, array) => {
                dampenedReports.push(array.toSpliced(index, 1))
            })
            if (countSafe(dampenedReports) > 0) {
                safeReports++
            }
        }
    })

    return safeReports;
}

function parseInput(filename: string): number[][] {
    const data: string = fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
    const reports: string[] = data.split(/\r\n/);
    return reports.map((levels) => levels.split(/\s+/).map((level) => parseInt(level)));
}

export {countSafe, countSafeWithDampener, parseInput};