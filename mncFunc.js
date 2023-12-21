// 1.  Write a function that takes an array of numbers as an argument and returns a new array containing only
//  the prime numbers from the original array. (Asked in Infosys interview)

const primearr = (oldarr) => {
  for (let i = 0; i < oldarr.length; i++) {
    let newarr = [];
    if (oldarr[i] % oldarr[i] == 0 && oldarr[i] % 1 == oldarr[i]) {
      newarr.push(oldarr[i]);
    }
  }
};
console.log(primearr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// 2. Write a function that takes a string as an argument and returns the
// string with all the vowels removed. (Asked in TCS interview)
function removeVowels(string) {
  let veowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (!veowels.includes(string[i])) {
      str += string[i];
    }
    console.log("object", str);
  }
  return str;
}

const resultvovels = console.log(removeVowels("My name is Anurag PAl"));
console.log("object", resultvovels);

// 3. Write a function that takes an array of numbers as an argument
//  and returns the maximum number in the array. (Asked in Accenture interview)

function maxNum(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
const maxnumber = console.log(maxNum([1, 0, 8, 9, 6, 5, 8, 88]));
// console.log(maxnumber)
// 4. Write a function that takes two arrays of numbers as arguments and
// returns a new array containing the elements that are present in both arrays. (Asked in Infosys interview)

function combinenuminbotharr(arr1, aar2) {
  let newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (aar2.includes(arr1[i])) {
      newarr.push(arr1[i]);
    }
  }
  return newarr;
}
const combined = console.log(
  combinenuminbotharr([1, 2, 4, 5, 3, 6], [9, 0, 8, 7, 6, 6, 1, 2])
);
// 5. Write a function that takes a string as an argument and returns the
//  number of words in the string. (Asked in TCS interview)

function numstr(str) {
  string = 0;
  for (let i = 0; i < str.length; i++) {
    string++;
  }
  return string;
}
const lenght = console.log(numstr("hello world"));

// 6. Write a function that takes an array of numbers as an argument and returns a new
// array containing the square of each number in the original array. (Asked in Accenture interview)

function squarenum (sqrnum) {
    let newsqrarr = [];

    for(let i = 0; i < sqrnum.length; i++){
        newsqrarr.push(sqrnum[i]*sqrnum[i])
        
    }
    return newsqrarr
}
const squares = console.log(squarenum([2,4,5,3,6]))

// 7. Write a function that takes two numbers as arguments and
//  returns the larger number. (Asked in Infosys interview)



// 8. Write a function that takes an array of strings as an argument and returns
//  a new array containing only the strings that have a length greater than or equal to 5. (Asked in TCS interview)

// 9. Write a function that takes an array of numbers as an argument and returns the
//  sum of the squares of all the odd numbers in the array. (Asked in Accenture interview)

// 10. Write a function that takes a string as an argument and returns the string with
// the first letter of each word capitalized. (Asked in Infosys interview)

// 11Remove duplicated from an array when we have multiplae cites 

function removeDuplicates(array) {
    const uniqueArray = [];
    
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
    
    return uniqueArray;
  }
  const resultcities = console.log(removeDuplicates(['New York', 'Paris', 'Paris', 'London', 'Tokyo', 'New York']))


//   function removeDuplicates(array) {
//     const uniqueArray = [];
//     const tracker = {};
  
//     for (let i = 0; i < array.length; i++) {
//       const element = array[i];
      
//       if (!tracker[element]) {
//         tracker[element] = true;
//         uniqueArray.push(element);
//       }
//     }
  
//     return uniqueArray;
//   }



//   12 How to merge two arrays using spread operator 

const array1  = ['arun', 'Ansh', 'Mayank', 'Sunny'];
const array2 = [ 'John', 'Doe', 'Chnacy']

const mergedArray = [...array1, ...array2];
console.log(mergedArray);
