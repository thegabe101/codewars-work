// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// const e = require("express");

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

// function countSheep(arrayOfSheep) {
//     let count = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] == true) {
//             count = count + 1;
//             console.log(count);
//         } else if (arrayOfSheep == false) {
//             count = count + 0;
//         } else if (arrayOfSheep[i] != true && arrayOfSheep[i] != false) {
//             console.log(NaN);
//         }
//     }
//     console.log(count)
//     return count;
// }

// countSheep([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true])

// function oddOrEven(array) {
//     const sumOfArr = array.reduce((acc, a) => acc + a, 0);
//     console.log(sumOfArr);
//     let remainder = sumOfArr % 2;

//     if (sumOfArr === 0) {
//         console.log('even');
//         return 'even';
//     } else if (sumOfArr % 2 === 0) {
//         console.log('even');
//         return 'even';
//     } else {
//         console.log('odd');
//         return 'odd';
//     }
// }

// oddOrEven([0, 5, 9])

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     let total = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
//     return total;
// }

// function setAlarm(employed, vacation) {
//     return employed && !vacation ? true : false;
// }

// function updateLight(current) {
//     if (current == 'red') {
//       return 'green';
//     }
//       return current == 'green' ? 'yellow' : 'red';
//   };

// function DNAStrand(dna) {
//     let dnaString = dna.toString();
//     console.log(dnaString);
//     let i = 0;

//     do {
//         i = i + 1;
//         if (dnaString[i] === 'A') {
//             dnaString = dnaString.replaceAll('A', 'T');
//         } else if (dnaString[i] === 'T') {
//             dnaString = dnaString.replaceAll('T', 'A');
//         }
//         // dnaString = dnaString.replaceAll('T', 'A');
//         // dnaString = dnaString.replaceAll('C', 'G');
//         // dnaString = dnaString.replaceAll('G', 'C')
//     } while (i < dnaString.length);

//     console.log(dnaString);


//     // if (dnaString.includes('A') === true) {
//     //     dnaString = dnaString.replaceAll('A', 'T');
//     //     console.log(dnaString);
//     //     return dnaString;
//     // }
//     //     else if (dnaString.includes('T') === true) {
//     //     dnaString = dnaString.replaceA
//     // }
// }


// DNAStrand('AAAA');


// GROCERY LIST: cucumber, cherry tomato, red onion, dill, cream cheese, coffee, half and half, DINNER GOODS, bagels, fruit,


// function duplicateEncode(word) {
//     ogArray = word.split('')
//     let spreadArray = [...word];
//     console.log(ogArray);
//     console.log(word.split(''));
//     console.log(ogArray.reduce((acc, letter) => word[0] == word[1] ? acc : acc += letter));
//     let result = spreadArray.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
//     console.log(result);
//     console.log(Object.values(result));
//     const valueArray = Object.values(result);
//     console.log(valueArray);
//     let returnString = '';

//     for (let i = 0; i < valueArray.length; i++) {
//         console.log(valueArray)
//         if (valueArray[i] <= 1) {
//             console.log(returnString)
//             returnString = returnString + '(';
//         } else if (valueArray[i] > 1) {
//             let valueGreater = valueArray[i];
//             console.log(returnString);
//             for (let j = 0; j < valueGreater; j++) {
//                 returnString = returnString + ')';
//             }
//         }
//     }
//     console.log(returnString);
//     return returnString;
// }

// // valueArray.forEach(function (part, index) {
// //     if (this[index] <= 1) {
// //         this[index] = '('
// //     } else if (this[index] > 1) {
// //         this[index] = ')';
// //     }
// //     console.log(valueArray.join(''));
// // }, valueArray)

// // return valueArray.join('');


// //     for (let i = 0; i < valueArray.length; i++) {
// //         if (valueArray[i] <= 1) {
// //             returnString = returnString + '(';
// //         } else if (valueArray[i] > 1) {
// //             returnString = returnString + ')';
// //         }
// //     }
// //     console.log(returnString);
// //     return returnString;
// // }


// // 'hello' should equal '(())('

// duplicateEncode('din');


// function sumTwoSmallestNumbers(numbers) {
//     const arrayNums = numbers.sort((a, b) => a - b).slice(0, 2);
//     console.log(arrayNums);

//     let sum = 0;

//     sum = arrayNums[0] + arrayNums[1];
//     console.log(sum);

//     return sum;
// }

// sumTwoSmallestNumbers([1, 4, 9, 99, 105])

// function sumTwoSmallestNumbers(numbers) {
//     const sortedNum = numbers.sort();
//     console.log(sortedNum);
//     return sortedNum;
// }

// sumTwoSmallestNumbers([1, 4, 9, 99, 105]);


// function gooseFunction(birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//     for (let i = 0; i < birds.length; i++) {
//         if (birds[i] === geese[i]) {
//             birds[i].slice[i, 1];
//         }
//         console.log(birds);
//     }
// }

// function gooseFunction(birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//     const filteredBirds = birds.filter((bird) => !geese.includes(bird));

//     console.log(filteredBirds)
// }


// gooseFunction(['Pilgrim', 'Cockatoo', 'Quail', 'Bluebird', 'Toulouse', 'Loon', 'Robin']);

// function alphabetPosition(text) {
//     // const alphabetLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     // const singleLetter = alphabetLetter.map((letter => letter))
//     // // console.log(singleLetter);

//     // for (let i = 0; i < text.length; i++)
//     //     if (text.includes(alphabetLetter[i])) {
//     //         console.log(i + 1);
//     //         // console.log(alphabetLetter[i]);
//     //     }

//     // // console.log(text.split(''));

//     let stringResult = '';
//     for (let i = 0; i < text.length; i++) {
//         let code = text.toUpperCase().charCodeAt(i)
//         if (code > 64 && code < 91) stringResult += (code - 64) + " ";
//         console.log(stringResult);
//     }
//     return stringResult.slice(0, stringResult.length - 1);
// }

// // console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// function removeSmallest(numbers) {
//     const lowestRating = Math.min(...numbers);
//     const lowestRatingIndex = numbers.indexOf(lowestRating);
//     const toFindDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) !== index);
//     const duplicateElements = toFindDuplicates(numbers);

//     console.log(duplicateElements);

//     let arr = [];

//     function filter() {
//         numbers.filter(e => {
//             if (e > lowestRating) {
//                 arr.push(e);
//             } else {
//                 for (let i = 0; i < duplicateElements.length; i++) {
//                     if (duplicateElements[i] === lowestRating) {
//                         arr = numbers.sort().filter((_, i) => i).reverse();
//                         console.log(arr);
//                         return arr;
//                     }
//                 }
//             }
//         })
//     }



//     filter();
//     // console.log(arr);
//     // return arr;
// }

// removeSmallest([2, 2, 1, 2, 1]);

// function index(array, n) {
//     let ourIndex = array[n];

//     if (our return Math.pow(ourIndex, n);
// }


// index([1, 2, 3, 4], 2);

// function square(num) {
//     return Math.pow(num, 2);
//   }

// function count(string) {
//     //take in the string argument and spread it
//     //use the reduce method, passing and initial value of empty object {}, a previous value of a, and a current value of e
//     //use callback function to check, for each value in the spread array, if that value is equal to the current value being checked. if so, incrememnt that value
//     //return current value at the end of the function for a full count of occurrence of each char within a string
//     let stringCount = [...string].reduce((a, e) => {
//         a[e] = a[e] ? a[e] + 1 : 1; return a
//     }, {});
//     console.log(stringCount)
// }

// count('abaddt');

// function friend(friends) {
//     let myFriends = [];
//     let i = 0;
//     console.log(myFriends);

//     for (let i = 0; i < friends.length; i++) {
//       if (friends[i].length === 4) {
//         myFriends.push(friends[i])
//       }
//     }

//     console.log(myFriends);
//     return myFriends;
// }

// friend(["Ryan", "Kieran", "Mark"]);

// function arr(n) {
//   let emptyArr = [];

//   for (let i = 0; i < n; i++) {
//     emptyArr.push(i)
//   }
//   console.log(emptyArr);

//   return emptyArr;
// }

// function findEvenIndex(arr) {
//   //escape if array is empty
//   if (arr.length == 0) {
//     return -1;
//   } else {
//     //assign the variables for the numbers to the right and left of our found index
//     let rightSide = 0;
//     let leftSide = 0;
//     //create reducer variable that will sum all numbers within the array indices chosen
//     const reducer = (acc, value) => acc + value;

//     for (let i = 0; i < arr.length; i++) {
//       if (i == 0) {
//         //slices every index to the right of the first number
//         //uses reduce with an initiated value of 0 to sum every number to the right of our index
//         rightSide = arr.slice(1).reduce(reducer, 0);
//         if (rightSide === i) {
//           //if check passes (sum equals the first val in the array) we return it
//           //this is looped until we compare values of left and right that are are matched
//           return i;
//         } else {
//           leftSide = arr.slice(0, i).reduce(reducer, 0);
//           rightSide = arr.slice(i + 1).reduce(reducer, 0);
//           //once we find a match, we return the index
//           if (leftSide == rightSide) {
//             return i;
//           }
//         }
//         //escape hatch if function manages to hit end of loop without finding proper index
//         return -1;
//       }
//     }
//   }
// }
// function queueTime(customers, n) {
//   try {
//     if (customers = []) return 0;

//     else if (n = 1) {

//       const initialValue = 0;
//       return customers.reduce((acc, val) =>
//         acc + val, initialValue)
//     }
//   } catch (err) {
//     return (err);
//   }

// }


function queueTime(customers, n) {
  //n is passed as an argument for number of tills 
  if (customers === []) {
    return 0
  }
  if (n === 1) {
    const initialValue = 0;
    return customers.reduce((acc, val) =>
      acc + val, initialValue)
  } else if (n > 1 && (customers.length <= n)) {
    const slowestCustomer = Math.max(...customers);
    return slowestCustomer;
  }
  else if (n > 1 && (customers.length >= n)) {
    // console.log(customers.indexOf(slowestCustomer));
    const slowestCustomer = Math.max(...customers);
    const slowestIndex = customers.indexOf(slowestCustomer);
    const arrMinusSlowest = customers.splice(slowestIndex, 1);
    let initialValue = 0
    return arrMinusSlowest.reduce((acc, val) => acc + val, initialValue) + slowestIndex;
  }
}


// console.log(queueTime([], 1));
// console.log(queueTime([1, 2, 3, 4], 1));
// console.log(queueTime([10, 2, 3, 3], 2));
// console.log(queueTime([3, 3, 2, 10], 2));

// queueTime([], 1);
// //return 0

// queueTime([1, 2, 3, 4], 1);
//should return 10 

queueTime([1, 2, 3, 4, 5], 100);
//should return 5 

queueTime([10, 2, 3, 3], 2)
//should return 10

