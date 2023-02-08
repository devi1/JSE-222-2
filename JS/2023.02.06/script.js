// let arr = [1,3,6,7,2,4,5,-1, 7,5];
// console.log(arr);
// delete arr[2]; // удаление элемента массива так же как и объекта. Но не меняется индексация. УДаоение происходит по ключу
// arr.sort(); // СОртировка массива
// console.log(arr);

// arr.splice(2, 2); // удаление по начиная от заданного индекса и в количестве указанным после
// arr.splice(-1, 0, 6, 7, 8); // Удаление с конца массива и в количестве, после добавление новых элементов в массив

// let newArr = [7,8,9,10];
// let newArr2 = [11,12];

// console.log(arr.concat(newArr, newArr2, newArr)); // Создание нового массива с добавлением других массивов

// arr.forEach(function(item, index, arr){ // Позволяет выполнить определенную функцию для каждого элемента массива
//     console.log(`${item} has ${index} index in ${arr}`);
// })
//// Т.к. метод sort() сортирует все по строкам из-за чего чилса с двумя или более цифрами сортируются неправильно. По итогу нужно создавать функцию правильной сортировки для чисел и после передавать ее в сам метод sort
// function arrSort(a, b){
//     if(a>b) return 1;
//     if(a<b) return -1;
//     if(a==b) return 0;
// }
//// Передаем нашу функцию сортировки
// arr.sort(arrSort);

// console.log(arr);

// arr.reverse(); //// Переварачивает массив

// console.log(arr);


// let str = 'qwe,rtr,asd,gfl,asd,gr'

// let arr = str.split(','); // Создает массив через разделитель. В нашем случае это ,

// console.log(arr);

// str = arr.join('GLUE'); // Создает строку из массива через "Клей". В нашем случае наш "Клей" это слово GLUE
// console.log(str);

// let arr = [1,2,3,4,5,6];

// arr.fill(9, 1,4) // заменяет элементы массива на переданное значение начиная от опредленного индекса и заканчивая другим индексом. НЕ ВКЛЮЧИТЕЛЬНО!

// console.log(arr);

// let arr = [];

// for(let i = 0; i < 5; i++){
//     let a = +prompt('Fill the array');
//     arr.push(a);
//     console.log(arr);
// }

// Task 3

// let arrOne = [4,3,1,5,8,10,2]
// let arrTwo = [3,2,4,5,10,7,1]

// for(let i = 0; i < arrOne.length; i++){
//     if(arrOne[i] > arrTwo[i]) console.log("Item of 1st arr is bigger")
//     if(arrTwo[i] > arrOne[i]) console.log("Item of 2nd arr is bigger")
//     if(arrOne[i] == arrTwo[i]) console.log("They are equal")
// }