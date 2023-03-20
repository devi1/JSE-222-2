// let regexp = new RegExp("шаблон", "флаги")

// let regexp = /шаблон/;
// let regexp = /\D\W\S/gmi;

// \d - digits 
// \w - words 
// \s - space 

// \D - NOT digit
// \W - NOT word
// \S - NOT space

// let str = "HTML5";
// let str2 = "HT4L5";
// let str3 = "HT L5";
// let str4 = "HT-L5";
// let regexp = /z{5}c{2,}/gi;

// console.log(str.match(regexp)); 
// console.log(str2.match(regexp)); 
// console.log(str3.match(regexp)); 
// console.log(str4.match(regexp)); 

// 1. Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону:
// 2. Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea по шаблону
// 3. Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca

let str = `найди вообще любу. букву от а до х з и  так далее`;

// \ Через данный символ мы экранируем спец символы

let rgx = /[a-zA-Z0-9]/g;

console.log(str.match(rgx));

// 4. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'
// 5. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
// 6. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'
// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea.
// 8. Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз
// 9. Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.
// 10. Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные.
// 11. Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество
// 12. Дана строка '23 2+3 2++3 2+++3 445 677'. Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные
// 13. Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.