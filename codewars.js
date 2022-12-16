// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// function findUniqueNumber(array) {
//     let num = array[0];

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//         if (num = array[i]) {
//             continue;
//         } else {
//             num = array[i];
//             console.log(num);
//             return;
//         }
//     }
//     return num;
// };

// function findUniqueNumber(array) {
//     let num;
//     let i = 0;

//     do {
//         num = array[i];
//         i++
//     } while (num = array[i])
//     console.log(num);
//     return num;
// }

// function findUniqueNumber(array) {
//     let uniqueNumber = array.filter((item, i, ar) => ar.indexOf(item) === i);
//     console.log(uniqueNumber);
// }


//uses .find method to "loop" through each element in the given array.
//once an element is found that satisfies the requirements specified, uniquenumber is assigned that value and the method exits out.
//here, if the first index is not equal to the second index in each separate log, that is when the function would exit and return the first num that is "special";

// function findUniqueNumber(array) {
//     const uniqueNumber = array.find(v => array[0] != array[1] ? v != array[2] : v != array[0]);
//     console.log(uniqueNumber);
//     return uniqueNumber
// }

// findUniqueNumber([1, 1, 1, 99, 1, 1]);


// function findSmallestInt(args) {
//     const minimumInteger = Math.min(...args);
//     console.log(minimumInteger);
//     return minimumInteger;
// }


// findSmallestInt([8, 99, 1, -3, 7])

function countSheep(arrayOfSheep) {
    let present = true;
    let notPresent = false;
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (present === arrayOfSheep[i]) {
            count++;
            console.log(count);
        } else if (notPresent === arrayOfSheep[i]) {
            count = count + 0;
        } else if (arrayOfSheep[i] != true && arrayOfSheep[i] != false) {
            console.log(NaN);
        }
        console.log(count)
        return count;
    }
}

countSheep([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])