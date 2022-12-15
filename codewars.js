// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniqueNumber(array) {
    let num = array[0];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (num = array[i]) {
            continue;
        } else {
            num = array[i];
            return;
        }
    }
    console.log(array[i]);
    return num;
};

findUniqueNumber([1, 1, 1, 99, 1, 1]);