// let regexp = new RegExp("шаблон", "флаги")

// let regexp = /шаблон/;
// let regexp = /\D\W\S/gmi;

// \d - digits 
// \w - words 
// \s - space 

// \D - NOT digit
// \W - NOT word
// \S - NOT space

let str = "HTML5";
let str2 = "HT4L5";
let str3 = "HT L5";
let str4 = "HT-L5";
let regexp = /z{5}c{2,}/gi;

console.log(str.match(regexp)); 
console.log(str2.match(regexp)); 
console.log(str3.match(regexp)); 
console.log(str4.match(regexp)); 

// 1. Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону:
// 2. Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea по шаблону
// 3. Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca