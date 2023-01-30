// let a = 5;

// let b = 2;

// while(a > 0){
//     console.log("hi!");
//     a--; // a = a-1;
// }

// let check = true;
// while(check){
//     console.log("check!");
//     check = false;
// }

// do{
//     console.log("hi!");
//     a--;
// }while(a < 0)

// for(let i = 0; i <= a; i++){
//     console.log(i);
// }

//// Task 1

// let a = +prompt("Enter number: ");

// while(a > 0){
//     alert("#");
//     a--;
// }

//// Task 2

// let a = +prompt("Enter the number: ");

// while(a--){
//     alert(a);
// }

//// Task 3

let a = +prompt("Enter the number: "); // 4
let b = +prompt("Enter the power: "); // 5
let c = a;
let d = 1;
while(d != b){ // 1
    a *= c; // 1024*4
    d++; // 4-1=3
    console.log("Power: "+d);
    console.log("Number: "+a);
}

console.log("Result: "+a); //