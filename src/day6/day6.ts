import fs from "node:fs";

export function parseInput(filename: string): string[][] {
    const data: string = fs.readFileSync(`${__dirname}/input/${filename}.txt`, 'utf8');
    const rows: string[] = data.split(/\r\n/);
    return rows.map((columns) => columns.split(''));
}

type cardinalDirection = '^' | '>' | 'v' | '<';
type coordinate = {x: number, y: number};
type guard = {location: coordinate, facing: cardinalDirection};

// @ts-ignore
function findGuard(map: string[][]): guard {
    const directions = ['^','>','v','<'];
    let guard: guard;
    map.forEach((row, y) => {
        let x = row.findIndex((cell) =>
            directions.includes(cell)
        )
        if (x !== -1) {
            guard = {location: {x: x, y: y}, facing: map[y][x] as cardinalDirection};
        }
    })
    // @ts-ignore
    return guard;
}

function rotateRight(facing: cardinalDirection): cardinalDirection {
    switch (facing) {
        case "<":
            return '^';
        case ">":
            return 'v';
        case "^":
            return '>';
        case "v":
            return '<';
    }
}

function move(map: string[][], guard: guard): [string[][], guard] {
    let ahead: coordinate;
    const boundaries = {xMax: map[0].length, yMax: map.length};
    switch (guard.facing) {
        case "<":
            ahead = {x: guard.location.x - 1, y: guard.location.y};
            break;
        case ">":
            ahead = {x: guard.location.x + 1, y: guard.location.y};
            break;
        case "^":
            ahead = {x: guard.location.x, y: guard.location.y - 1};
            break;
        case "v":
            ahead = {x: guard.location.x, y: guard.location.y + 1};
            break;
    }
    if (onMap(ahead, boundaries) && map[ahead.y][ahead.x] === '#') {
        guard.facing = rotateRight(guard.facing);
    } else {
        map[guard.location.y][guard.location.x] = 'X';
        guard.location = ahead;
    }
    if (onMap(guard.location, boundaries)){
        map[guard.location.y][guard.location.x] =guard.facing;
    }
    return [map, guard];
}

function onMap(coordinate: coordinate, boundaries: {xMax: number, yMax: number}): boolean {
    return (0 <= coordinate.x && coordinate.x < boundaries.xMax && 0 <= coordinate.y && coordinate.y < boundaries.yMax)
}

export function traverse(map: string[][]): number {
    let guard: guard = findGuard(map);
    const boundaries = {xMax: map[0].length, yMax: map.length};
    while (onMap(guard.location, boundaries)) {
        [map, guard] = [...move(map, guard)]
        // printMap(map);
    }
    return map.flat().filter((symbol) => symbol === 'X').length;
}

function printMap(map: string[][]):void {
    console.log(map.map(row => row.join('')).join('\n'))
}