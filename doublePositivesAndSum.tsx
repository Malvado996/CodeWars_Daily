

export function doublePositivesAndSum(arr: number[]): number {
    console.log('hello Grok');

    return arr.reduce((sum, num) => num > 0 ? sum + num * 2 : sum, 0)
}

const testArray = [-2, -1, 0, 3, 6, 9];
console.log(doublePositivesAndSum(testArray))