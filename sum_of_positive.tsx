// Task
// You get an array of numbers, 
// return the sum of all of the positives ones.

// export function positiveSum(arr: number[]): number {

//     console.log(arr);
//     let returnSum = 0;

//     for (const x of arr) {
//         console.log(x);
//         if (x > 0) {
//             returnSum += x;
//         }
//     }

//     console.log(returnSum)
//     return returnSum;
// }

// const testArray = [-1, -2, 0, 3, 6, 9]
// positiveSum(testArray);

export function positiveSum(arr: number[]): number {

    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);

}

const testArray = [-1, -2, 0, 3, 6, 9]
positiveSum(testArray);
