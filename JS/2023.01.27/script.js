// let num = +prompt("Enter the 5 digit number: "); //12345
// let lastDigit = num%10; //5
// num = Math.floor(num/10); //1234
// num = lastDigit * 10000 + num;
// alert(num);

// 2 решение
//num = (num%10)*10000 + Math.floor(num/10);

// ! - отрицание 
// || - сложение
// && - умножение 
// ^ - исключение

// !true == false
// !false == true

// true&&false == false
// false&&false == false
// false&&true == false
// true&&true == true

// true&&false == true
// false&&true == true
// true&&true == true
// false&&false == false

// true^false==true
// false^true==true
// true^true==false
// false^false==false

// > больше
// < меньше
// >= больше или равно
// <= меньши или равно
// == сравнение
// === сравнение по значению и по типу данных
// != проверка неравенства
// !== проверка неравенства с проверкой по типу данных

// let a = +prompt('Enter first number: ');
// let b = +prompt('Enter second number: ');

// if(a > b){
//     alert("A is bigger than B");
// }
// else if(a < b){
//     alert("A is smaller than B");
// }
// else{
//     alert("Something is wrong")
// }

// let num = prompt('Say smth');

// switch(num){
//     case "Orange":
//         alert('Num is equal to zero');
//         break;
//     case "Apple":
//         alert('Num is equal to one');
//         break;
//     case "Banana":
//         alert('Num is equal to two');
//         break;
//     case 3:
//         alert('Num is equal to three');
//         break;
//     case 4:
//         alert('Num is equal to four');
//         break;
//     case 5:
//         alert('Num is equal to five');
//         break;
//     case 6:
//         alert('Num is equal to six');
//         break;
//     case 7:
//         alert('Num is equal to seven');
//         break;
//     case 8:
//         alert('Num is equal to eight');
//         break;
//     case 9:
//         alert('Num is equal to nine');
//         break;
//     default:
//         alert('Invalid number');
// }

// if(num ==0){
//     alert('Num is equal to zero');
// }
// else if(num == 1){
//     alert('Num is equal to one');
// }
// else if(num == 2){
//     alert('Num is equal to two');
// }
// else{
//     alert('Invalid number');
// }

// let age = +prompt('ENter your age please');

// (age < 13)?alert("You are a kid!"):
// (age < 20)?alert("You are a teenager"):
// alert("You are an adult");



// условие?действие1:действие2;

// if(age < 13){
//     m = "You are a kid!";
// }
// else if(age < 20){
//     m = "You are a teenager";
// }
// else{
//     m = "You are an adult";
// }
// alert(m);