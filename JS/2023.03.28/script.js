// function rest(a, b,...arr){  // оператор rest или же ...[название массива] (без квадратных скобок)
//     // let sum = 0;
//     // for(let i = 0; i < arr.length; i++){
//     //     sum += arr[i];
//     // }
//     // return sum + a + b;
//     console.log(a); // 1
//     console.log(b); // 2
//     console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// }

// // rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
// rest(1, 2);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(...arr); // 1 2 3 4 5 6 7 8

// let secArr = [9,10,11,12,13]

// let newArr = [...arr, ...secArr];

// console.log(newArr); // [1, 2, 3, 4,

// let user = {
//     name: 'John',
//     age: 36,
//     surname: 'John',
//     wife: true,
// }

// console.log(user)

// let newUser = {...user, school: "127 USAWs"};
// console.log(newUser)

// let arr = "Damir Orazuly Yessenbek 877777777 0121565151 KZ978941561065 21.03.2022".split(" ");;

// let str = "wertyuio asdfghjkl kjbdls kjfdsjdf osdfh sdfkjsdfh s dhfshdf kjsfkjsdfjs dfsdfs".split(" ");

// let [a, b, c, ...rest] = str;

// let [firstName, middleName, lastName, phoneNumber, IIN, IBN, creationDate] = arr;

// console.log(firstName)
// console.log(middleName)
// console.log(lastName)
// console.log(phoneNumber)
// console.log(IIN)
// console.log(IBN)
// console.log(creationDate)

// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(...rest)

// Есть несколь инпутов 1 ФИО, 2 Номер телефона (для номера телефона нужно написать проверку, которая проверяет Принадлежит ли номер Казахстану или нет), 3 инпут ИИН( сделать проверку на количество и только на наличие цифр), 4 инпут вводится автоматически сегодняшняя дата в формате ДД.ММ.ГГГГ. Все это сперва объеденить через rest (...), после деструктуризировать на 4 переменной и вывести все в одну строку через шаблонные строки