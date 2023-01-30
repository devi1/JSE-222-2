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

// let a = +prompt("Enter the number: "); // 4
// let b = +prompt("Enter the power: "); // 5
// let c = a;
// let d = 1;
// while(d != b){ // 1
//     a *= c; // 1024*4
//     d++; // 4-1=3
//     console.log("Power: "+d);
//     console.log("Number: "+a);
// }

// console.log("Result: "+a); 

//// Task 1

// let a;
// do{
//     a = +prompt("Your answer is: ");
// }while(a != (2+2*2))

// alert("Result: "+a);

//// Task 2

// let a = 1000;
// let cnt = 0;

// do{
//     a=a/2
//     console.log(a);
//     cnt++;
// }while(a > 50);

// alert("Result: "+a+"\n" + "Count: "+cnt);

//// Task 3

// let a = +prompt("Enter the number:");

// for(let i = a; i <= 100; i++){
//     if(i%a==0){
//         alert(i);
//     }
// }

//// Task 4

// let a = +prompt("Enter the first number: ");
// let b = +prompt("Enter the second number: ");
// let c = 1;
// for(let i = a; i <= b; i++){
//     if(c%4==0){
//         console.log(i);
//         c++;
//     }
//     c++;
// }

//// Task 5

// let a = +prompt("Enter the number: ");
// let cnt = 0;

// for(let i = 2; i < a; i++){
//     console.log(i);
//     if(a%i == 0){
//         cnt++;
//     }
// }
// if(cnt == 0){
//     alert("Number is prime");
// }
// else{
//     alert("Number is not prime");
// }

//// HW Task 1
//1
// let a = +prompt("Enter first number") //1
// let b = +prompt("Enter second number") //5

// let sum = 0;
// for(let i = a; i <= b; i++){
//     sum += i; 
// }

// alert(sum);
//2
// while(a <= b){
//     sum += a;
//     a++;
// }

// alert(sum);

//// HW Task 2

// let a = +prompt("Enter first number") //2
// let b = +prompt("Enter second number") //2

// while(a!=b){
//     if(a > b){
//         a = a - b; // 4 - 2 = 2
//     }
//     else{
//         b = b - a; // 8 - 6 = 2
//     }
// }

// alert(a);

//// HW Task 3

let a = +prompt("Enter a number");

for(let i = 1; i <= a; i++){
    if(a%i==0){
        alert(i);
    }
}