// Write a function 
// that takes in a string of one or more words, 
// and returns the same string, 
// but with all words that have five or more letters reversed 
// (just like the name of this kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.


// export function spinWords(words: string): string {

//     const wordArray = words.split(' ');

//     let returnArray = [];

//     for (const word of wordArray) {

//         if (word.length < 3) {
//             returnArray.push(word)
//         } else {
//             const reversed = word.split('').reverse().join('');
//             console.log(reversed);
//             returnArray.push(reversed)
//         }
//     }
//     console.log(returnArray.join(' '));
//     return returnArray.join(' ')
// }

// spinWords('Gatos at maximun chaos levels')

export function spinWords(words: string): string {
    const wordArray = words.split(' ');

    const spunWords = wordArray.map((word) => {
        if (word.length >= 5) {
            return word.split('').reverse().join('')
        }
        return word;
    });

    return spunWords.join(' ')
}