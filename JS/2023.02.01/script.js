// function factorial(num){
//     // return n?n*factorial(n-1):1;
//     if(num){
//         return num*factorial(num-1);
//     }
//     else{
//         return 1;
//     }
// }
// let num = +prompt("Enter the number")
// console.log(factorial(num));

// if(n){
//     return n*factorial(n-1);
// }
// else{
//     return 1;
// }

// function mathR(num){
//     return num*num+num-num/num;
// }

// let a = +prompt("ENter the number")
// let b = +prompt("ENter the number")
// let c = +prompt("ENter the number")
// let d = +prompt("ENter the number")
// let e = +prompt("ENter the number")
// let f = +prompt("ENter the number")
// let g = +prompt("ENter the number")
// let h = +prompt("ENter the number")
// let i = +prompt("ENter the number")
// let j = +prompt("ENter the number")

// alert(mathR(a))
// alert(mathR(b))
// alert(mathR(c))
// alert(mathR(d))
// alert(mathR(e))
// alert(mathR(f))
// alert(mathR(g))
// alert(mathR(h))
// alert(mathR(i))
// alert(mathR(j))

//// Task 1

// function check(f, s){
//     if(f>s) return 1
//     else if(f<s) return -1
//     else return 0
// }

// alert(check(2,2));

//// Task 3

// function splitIt(a,b,c){
//     return a*100+b*10+c;
//     //retrun a+""+b+""+c
// }

// alert(splitIt(1,2,3));

//// Task 4

// function area(a, b){
//     if(!a) return b*b;
//     else if (!b) return a*a;
//     else return a*b;
// }

//// Task 5

function isPerfect(num){
    let temp = 0;
    for(let i = 1; i <= num/2; i++){
        if(num%i == 0){
            temp += i;
        }
    }

    if(temp == num && temp!=0){
        return true;
    }
    else return false;
}

let a = +prompt("enter first number");
let b = +prompt("enter second number");

function range(a, b){
    for(let i = a; i <= b; i++){
        if(isPerfect(i)) alert(i);
    }
}

range(a, b);