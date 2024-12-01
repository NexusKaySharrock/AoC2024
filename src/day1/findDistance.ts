function findDistance(listA: number[], listB: number[]) : number {
    const sortedA =  listA.sort((x,y) => x - y);
    const sortedB =  listB.sort((x,y) => x - y);

    return sortedA.reduce((total, currentValue, currentIndex) => {
        return total + compareElements(currentValue, sortedB[currentIndex]);
    }, 0);
}

function compareElements(a: number, b: number): number {
    return Math.abs(a - b);
}

export {findDistance};