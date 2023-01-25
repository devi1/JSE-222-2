// let number;
// console.log(number);

// let number = +prompt("Введи любое число");
// console.log(typeof number);
// console.log(number);
// let numberOfTimes = number * 5;
// let s = 2;
// console.log(s);
// number = s;
// number--;
// console.log(number);
// alert(number);
// let check = confirm("Are you sure you want to");
// console.log(check);
// number числа
// string строки
// boolean true | false  булеан истина/ложь
// undefined неизвестная переменная
// null нулл
// object объект

// +, -, *, /, %

// ++s; a++
// --a; a--
// = == ===

// let a = 2;
// let b = "2";

// if(a === b){
//     console.log("They are match!");
// }
// else if (a > b){
//     console.log("a more than b!");
// }
// else{
//     console.log("a less than b!");
// }

// число**степень

// Math.pow(число, степень)

// Task 1

// let num = +prompt("Enter the number")
// num = num**2;
// alert(num);

//Task 2

// let numOne = +prompt("Enter the number");
// let numTwo = +prompt("Enter the number");
// let mid = (numOne + numTwo) / 2;
// alert(mid);

// Task 3

// let a = +prompt("Enter the side of square");
// let s = a**2;
// alert(s);

// Task 7

let h = +prompt("Enter the hours");
let m = +prompt("Enter the minutes");
let lastMin = 24*60 - (h*60+m);
let lastHour = Math.floor(lastMin/60);
lastMin = lastMin - lastHour*60;

alert(lastHour + ":" + lastMin);