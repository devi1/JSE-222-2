function myFunc(a, b){
    return a+b;
}

let btn = document.getElementById("button");
btn.onclick = function(){
    console.log(this)
}

btn.onclick = () =>{
    console.log(this)
}

let sum = () => "sum";

console.log(sum())

function sum(){
    return "sum"
}

function task(q, a1, a2){
    if(confirm("Can you ask the question?")) return true;
    else return false;
}

task(
    "Do you agree?",
    function(){console.log("You answered yes")},
    function(){console.log("You answered no")}
)


function task(q, a1, a2){
    if(confirm("Can you ask the question?")) return true;
    else return false;
}

task(
    "Do you agree?",
    () => {("You answered yes")},
    () => {("You answered no")}
)

