// Starts from 4th May

// ?????????????                         Question on function    ??????????????????????????????????

// 1. Write a function that takes two numbers as arguments and returns their sum.
// 2. Write a function that takes a string as an argument and returns the length of the string.
// 3. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// 4. Write a function that takes two strings as arguments and returns the concatenation of the two strings.
// 5. Write a function that takes an array of strings as an argument and returns the length of the longest string in the array.
// 6. Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.
// 7. Write a function that takes an array of numbers as an argument and returns a new array containing only the even numbers from the original array.
// 8. Write a function that takes a string as an argument and returns the same string in reverse order.
// 9. Write a function that takes an array of strings as an argument and returns a new array containing only the strings that start with the letter "a".
// 10. Write a function that takes a number as an argument and returns true if the number is prime, and false if it is not.

// --------Answer 1.  <<<<<<<<<<<<<<<<<<<<<<<<....Starts...>>>>>>>>>>>>>>>>>>>>>>

// Write a function that takes two numbers as arguments and returns their sum.

// type 1 function
let sumofTwo;
function sum1(num1, num2) {
  return num1 + num2;
}

sum1(4, 5);
console.log(sumofTwo);

// const sunresult = sum(4,2)
console.log(sumofTwo);

const sum2 = function (n1, n2) {
  return (total = n1 + n2);
};

sum2(4, 6);
console.log(total);

// arrow function
const add = (add1, add2) => {
  return add1 + add2;
};
add(10, 20);

// if you want to store the data in varibale then do like this

const addresult = add(10, 20);
console.log(addresult);

// Answer 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<................End............>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a function that takes a string as an argument and returns the length of the string.

function string1(string) {
  return string.length;
}

console.log(string1("Anurag"));

// type second

const string2 = function (string) {
  return string.length;
};
console.log(string2("AnuragPal"));

// Answer 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............End............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// let emptyarr = [];
const sumarr1 = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};
// sumarr1([1, 2, 3]);
const sumresult = sumarr1([1, 2, 3]);

console.log("sum", sumresult);

// another try ??????????????????????????????????????????????????????????????/ for practice

// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

const arraysum = (arr2) => {
  let intialsum = 0;
  for (let i = 0; i < arr2.length; i++) {
    intialsum += arr2[i];
  }
  return intialsum;
};

const arraysumResult = arraysum([2, 4, 6, 8, 10, 20]);

console.log(arraysumResult);

// Answer 3<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............end............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Write a function that takes two strings as arguments and returns the concatenation of the two strings.

const concateString = (str1, str2) => {
  return (
    // str1+str2
    // str1+ " " +str2

    `${str1} ${str2}`
  );
};
const concatResult = concateString("Anurag", "Pal");
console.log("concatResult", concatResult);

// Answer 4<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............end............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 5<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>
// 5. Write a function that takes an array of strings as an argument and returns the length of the longest string in the array.

// const longestString = (arrOfStr) => {
//   let emptyarr = [];
//   for (let i = 0; i < arrOfStr.length; i++) {
//     emptyarr.push(arrOfStr[i].length);

//   }
//   return emptyarr;
// };

// const longestResult = longestString(["Anurag", "PAl", "Arun", "Kumar"]);
// console.log(longestResult);

const longestString = (arrOfStr) => {
  let str = "";
  // str=arrOfStr[i]
  for (let i = 0; i < arrOfStr.length; i++) {
    if (str.length < arrOfStr[i].length) {
      str = arrOfStr[i];
    }
  }
  return str;
};

const longestResult = longestString([
  "Anurag",
  "PAl",
  "deepanshu",
  "anuragpal2",
  "Arun",
  "Kumar",
  "jugyshubist",
]);
console.log("longestResult : ", longestResult);

// split task in small peices

// 1. Create an function having an argument
// 2. run a for loop to check the lenght of the elements in the arraysum
// 3. check the which of the string have longest length

// aage kal se
// Answer 5<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............End............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 6<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>
// 6. Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.

const even = (num) => {
  // if(num % 0) {
  //   return true
  // }else{
  //   return false
  // }
  return num % 2 === 0 ? true : false;
};
const evennumber = console.log(even(9));

const even21 = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const evennumber1 = console.log(even(10));

// Answer 6<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............End............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 7<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............Start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7. Write a function that takes an array of numbers as an argument and returns a new array containing only
//  the even numbers from the original array.

// 1. Method

const evenarr = (evennums) => {
  let evenarrs = [];
  let oddarr = [];
  for (let i = 0; i < evennums.length; i++) {
    if (evennums[i] % 2 === 0) {
      evenarrs.push(evennums[i]);
    } else {
      oddarr.push(evennums[i]);
    }
  }
  return evenarrs;
};

// const evenarray = console.log(evenarr([12, 2, 3, 5, 6, 8, 7, 9]));

// 2. Method

const evenarr1 = (evennums) => {
  return evennums.filter((num) => num % 2 === 0);
};

// 3. Method
const evenarr2 = (evennums) => evennums.filter((num) => num % 2 === 0);

// 4. Method
const evenarr3 = (evennums) => {
  const newarr = evennums.filter((num) => num % 2 === 0);
  return newarr;
};

// Answer 7<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............End............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 8<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............Start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8. Write a function that takes a string as an argument and returns the same string in reverse order.

const reverseString = (string) => {
  let newarr = [];
//  there is no need to split the string into array                 woww!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // string.split('').reverse()
  // arrstr = string.split("");
  for (let i = string.length - 1; i >= 0; i--) {
    newarr.push(string[i]);
  }
  return newarr;
};

const resultreverse = console.log(reverseString("Happy BirthDay"));


// Answer 8<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............End............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 9<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............Start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// 9. Write a function that takes an array of strings as an argument and returns a new array containing only the strings
//  that start with the letter "a".

const starrtWithA = (arrOfStrs) => {
  let newarr = [];
for(let i = 0; i < arrOfStrs.length; i++){
  if(arrOfStrs[i][0] === 'A'){
   
    newarr.push(arrOfStrs[i])

  }
}
return newarr

}

 const Res = starrtWithA(['Hello', 'Anurag', 'Deepak', 'Deepanshu', 'Jigyshu', 'Arun', 'Amar']);
 console.log(Res,"these Starts With Letter A")


//  Practice using Filter method 

const LetterA = (arrsOfstr) => {
 return arrsOfstr.filter(str => str.startsWith('A') || str.startsWith('a'))
}
const Res1 = LetterA(['Hello', 'Anurag', 'Deepak', 'Deepanshu', 'Jigyshu', 'arun', 'Amar']);
console.log(Res1);

// clg

// Answer 9<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............End............... >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Answer 10<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.............Start............... >>>>>>>>>>>>>>>>>>>>>>>>>>>
// 10. Write a function that takes a number as an argument and returns true if the number is prime, and false if it is not.
const primenum = numPrime => numPrime % numPrime && 1 === 0  ? true : false;
console.log('This is the Prime number',primenum(3));

