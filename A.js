//A. Part 1

//1.
let str = "123";
console.log(str - -7);

//2.
let y = 1;
if (y == false) {
  console.log("invalid");
} else {
  console.log(true);
}

//3.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < 10; index += 2) {
  const result = arr1[index];
  console.log(result);
}

//4.
const arr = [1, 2, 3, 4, 5];
const x = arr.filter((items) => items % 2 == 0);
console.log(x);
//5.
const arr9 = [1, 2, 3, 4];
const arr0 = [...arr9, 5, 6, 7, 8];
console.log(arr0);

//6.
let day = "2";

switch (day) {
  case "1":
    console.log("sunday");
    break;

  case "2":
    console.log("Monday");
    break;

  case "3":
    console.log("tuesday");
    break;

  case "4":
    console.log("wednesday");
    break;

  case "5":
    console.log("thursday");
    break;

  case "6":
    console.log("friday");
    break;

  case "7":
    console.log("saturday");
    break;
}

//7.
const arr2 = ["a", "ab", "abc"];
const results = arr2.map((items) => items.length);
console.log(results);

//8.
function checker(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("divisable by both");
  } else {
    console.log("no");
  }
}
checker(60);

//9.
const power = (num) => {
  console.log(num * num);
};
power(10);

//10.

//11.
function sum(...nums) {
  console.log(nums.reduce((total, n) => total + n));
}
sum(1, 2, 3, 4);

//13.
const arr3 = [66, 22, 110, 11, 9, 7, 2];
function max(arr3) {
  const max = arr3.sort((a, b) => b - a);
  console.log(max[0]);
}
max(arr3);

//14.

function keys() {
  const obj = {
    name: "John",
    age: "20",
    Country: "Egypt",
  };

  const constkey = Object.keys(obj);
  console.log(constkey);
}
keys();
//15.

const sentence = "the red brown fox";
const words = sentence.split(" ");

console.log(words);

// Print words one by one
//B.Part 2
//1.
//forEach is an array method. It runs a callback function on each element. You cannot use break, continue, or return to stop the loop early. It’s mainly used when you just want to execute code for every item.
//for of is a loop statement. It works with arrays and other iterable objects (like strings, maps, sets). You can use break, continue, and return inside it, which makes it more flexible.
//2.
//Hoisting is a JS behaviour that moves the variable declaration to the top of its scope and it Works only for var
//Ex:
//  var x ;          |       |
// console.log(x) ;  |   =   |    console.log(x);
// x = 5;            |       |  var x = 5;
// Output is undefined because it is printed before giving it a value but it is (((((declared))))

// TDZ is an abbreviation for Temporal Dead Zone and it happens to the const and let
//it,s the period between entering scope and being declared where the variable cannot be accessed.
// Ex.
//console.log(x)   &    console.log(x)
//let x =5;              cons x =5;
// output gonna be a reference error and enters the TDZ

//3. loose equality ==  vs strict equality ===
// loose equality only compares values   strict equality compares values and data types
//5.
// type conversion You manually convert from one type to another using built-in functions.
//type coersion JavaScript **automatically** converts types when needed.
