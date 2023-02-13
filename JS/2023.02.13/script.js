// function functionName(a, b, c){
//     alert("Hello " + a + ", " + b + ", " + c);
// }
// let q = "damir";
// let w = "IT-Step";
// let e = "aswertyuikl;kmhjbgtr";

// let name1 = "Damir";
// let name2 = "Assel";
// let name3 = "Oleg";
// let name4 = "Petr";
// let name5 = "Dina";
// let name6 = "Anar";
// let name7 = "Sanzhar";
// let name8 = "Timur";

// function sayHello(name){
//     alert(`Welcome to the lesson ${name}! We are glad to see you here.`)
// }

// sayHello(name1);
// sayHello(name2);
// sayHello(name3);
// sayHello(name4);
// sayHello(name5);
// sayHello(name6);
// sayHello(name7);
// sayHello(name8);

// let string1 = 'single-quoted'; // Одинарные кавычки
// let string2 = "double-quoted"; // Двойные кавычки
// let string3 = `backtick`; // Апостраф

// console.log(string3);

// alert(`This is ${variableName} string`)

// let str = "qwertyuiopplkjhgfdsaZxcvbnm,";

// console.log(str.length); // Длинна строки
// console.log(str.at(-3)); // Индекс строки

// for(let c of str){
//     console.log(c);
// }

// console.log(str.toUpperCase()); // Вверхний регистр
// console.log(str.toLowerCase()); // Нижний регистр

// console.log(str.indexOf('Zxcv')); // Индекс вхождения подстроки

// let target = "p";

// let pos = 0;

// while(true){
//     let fPos = str.indexOf(target, pos);
//     if(fPos == -1) break;
//     console.log(fPos);
//     pos = fPos + 1;
// }

// console.log(str.substring(2, 6)); // вывод подстроки
// console.log(str.substring(6));

// 1. Есть строка "aaa bbb ccc" вывести aaa
// 2. Есть строка "aaa bbb ccc" вывести bbb
// 3. Есть строка "aaa bbb ccc" вывести ccc
// 4. Есть строка с датой "13-02-2023" сделать из нее строку "13.02.2023"
// 5. "ЛООЛДФЫОВЩЛФЫВ" перевести в нижний регистр
// 6. "лдойцвйвфв" перевести в верхний регистр
// 7. "какая-то рандомная строка" вывести количество символов в данной строке
// 8. "какая-то рандомная строка" вывести позицию слова строка
// 9. "какая-то рандомная строка" вывести позиции буквы "к"
//10. Из "привет джс" сделать "Привет джс"
//11. "ПРЛОр олрш цйыфы щорыва цаво" посчитать количество слов в данной строке

let str = "апвлоыар олрш цйыфы щорыва цаво";
let words = str.split(" ");
let result = "";
for (let word of words) {
  result += word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(result);