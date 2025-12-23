// Write a function 
// that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers 
// in the form of a phone number.

// export function createPhoneNumber(numbers: number[]): string {
//     numbers.forEach((number) => number.toString);

//     let returnString = `"(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]${numbers[7]}${numbers[8]}${numbers[9]}"`
//     return returnString
// }

export function createPhoneNumber(numbers: number[]): string {
    if (numbers.length !== 10) {
        throw new Error('Array must contain exactly 10 numbers');
    }

    // Optional: validate 0–9
    if (numbers.some(n => n < 0 || n > 9)) {
        throw new Error('Numbers must be between 0 and 9');
    }

    const [a, b, c, d, e, f, g, h, i, j] = numbers;

    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}