// let arr = [1,2,3,4,5,6]; // структура массива
// // console.log(arr[5]); //6
// console.log(arr);
// arr[3] = 18; // перезапись значения элемента массива
// console.log(arr);
// // console.log(arr[6]); // undefined
// arr[6] = 7; // добавление нового элемента в массив по индексу
// console.log(arr);

// console.log(arr.length);

// let newArr = [1, "mas", 2, {name: "Damir"}, true, function(){alert("Hello")}] // массив может харнить в себе разные типы данных

// console.log(newArr);
// console.log(arr);

// arr.push(7); // добавление в конец
// console.log(arr);

// arr.unshift(0); // добавление в начало
// console.log(arr);

// arr.shift(); // удаление с начала
// console.log(arr);

// arr.pop(); // удаление с конца
// console.log(arr);

// let matrix = [[1,2,3], [1, true, 'adcfghjn'], [7,8,9]] // структура двойного массива (многомерного)

// console.log(matrix);

let user = {
    name: "Damir", // свойство объекта
    surname: "surname", // свойство объекта
    age: 21, // свойство объекта
    login: "login", // свойство объекта
    "likes hiking": true, // свойство объекта
    qwertyuiknbvfds: function(){  // метод объекта
        alert("Hi, "+ this.name+"!");
    }
}   // структура объекта 
 
// свойство объекта это переменная внутри объекта
// метод объекта это функция внутри объекта

console.log(user["likes hiking"]); // вывод свойства объекта который состоит из нескольких раздельныых слов

delete user["likes hiking"]; // удаление свойства

console.log(user);

user.name = "Anar"; // перезапись свойства объекта

console.log(user);

user.gender = "female"; // добавление нового свойства

console.log(user);

user.qwertyuiknbvfds(); // вызов метода объекта