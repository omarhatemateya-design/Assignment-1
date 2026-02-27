//A. Part 1

//1.
let str = "123";
console.log(str - -7);

//2.
//let boolean = ;
//console.log(boolean);

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

//B.Part 2

//2.
//Hoisting is a JS behaviour that moves the variable declaration to the top of its scope and it Works only for var
//Ex:
//  var x ;          |       |
// console.log(x)    |   =   |    console.log(x)
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
