// let a = 3;
// let b = 6;
// let c = 3;
// let cntWhile = 0;
// let cntDoWhile = 0;

// while(b > a){
//     alert("Alert from while");
//     cntWhile++;
//     console.log(`${cntWhile} + from While`);
//     a++;
// }

// do{
//     alert("Alert from do while");
//     cntDoWhile++;
//     console.log(`${cntDoWhile} + from DoWhile`);
//     c++;
// }while(b > c)

// for(let i=0; i<condition.length; i++){

// }

// break; // завершить цикл
// continue; // пропустить одну итерацию



//// Task 10

// let N = +prompt("Your number?");

// let N = Math.floor(Math.random()*101)

// while(true){
//     let guess = +prompt("Guess the number: ");

// }

let guessedNum = Number(alert("Загадайте число от 1 до 100")); // Создается переменная числа которое мы загадали.
let lowerLimit = 0; // Нижний лимит
let upperLimit = 100; // Верний лимит
let N = 50; // Само предпологаемое число по мнению компьютера

while(guessedNum !== N) { // создается цикл с условием пока не станет равно
    let answer = prompt(`Ваше число >, <, или равно ${N}`, '>, <, ='); // Запрашиваем у польщователя  предположение компьютера
    if (answer == '>') {
        lowerLimit = N; // Меняем лимит на число N
        N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit); // Меняем само число N
    } else if (answer == '<') {
        upperLimit = N; // Меняем лимит на число N
        N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit); // МЕняем число N
    } else {
        guessedNum = N; // 
    };
};
alert(`Задуманное число ${N}`);