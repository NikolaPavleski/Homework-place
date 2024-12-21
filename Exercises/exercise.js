//Exercise 1
let allTheThingsWeLearned =['strings', 'loops', 'objects', 'arrays'];
alert(allTheThingsWeLearned)
//Exercise 2
function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    return longest;
  }
  let words = ['apple', 'pear', 'banana', 'pineapple', 'cherry'];
  console.log(findLongestWord(words));
//Exercise 3
function theDifference(num) {
    let difference = num - 13;
    if (num > 13) {
      difference *= 2;
    }
    return difference;
 }
console.log(theDifference(10));
console.log(theDifference(20));
console.log(theDifference(13));
//Exercise 4
function findCloserToOneHoundred(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        alert('This is a negative number. Try again.');
        return;
    }
    let diff1 = 100 - num1;
    let diff2 = 100 - num2;
    if (diff1 < diff2) {
        alert(num1 + ' is closer to 100');
    } else if (diff2 < diff1) {
        alert(num2 + ' is closer to 100');
    } else {
        alert('Both numbers are equally close to 100');
    }
}
let input1 = (prompt('Enter the first number:'));
let input2 = (prompt('Enter the second number:'));
findCloserToOneHoundred(input1, input2);
//Exercise 5
let BobSallary = 1000;
let BobRent = 375;
let BobBills = 250;
let rentAndBill = BobRent + BobBills;
let BobTotal = BobSallary - rentAndBill
console.log('This is how much salary Bob is left with:' + BobTotal);
//Exercise 6
let grades = [10, 6, 8, 9, 6];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let average = sum / grades.length;
if (average >= 8) {
    alert('The student passed');
} else {
    alert('The student didnt pass. It wasnt enough');
}
//Exercise 7 
let multipleArray = [1, 2, null, undefined, NaN, "", false, 5, "Hello", true];
function removeFalseValues(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
let cleanedArray = removeFalseValues(multipleArray);
console.log(cleanedArray);
//Exercise 8
function theSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  let numbers = [3, 5, 2, 10, 4, 3, 10, 1, 19, 23, 3];
  console.log(theSmallestNumber(numbers));
  //Exercise 9
  function generateAndModifyArray() {
    let array = [];
    for (let i = 1; i <= 500; i++) {
      array.push(i);
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 5 === 0) {
        array[i] = array[i] * 10;
      }
    }
    return array;
  }
console.log(generateAndModifyArray());  