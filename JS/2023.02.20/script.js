function changeColor(){
    let r = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);
    console.log(r);
    console.log(g);
    console.log(b);
    // let div = document.getElementById('myDiv');
    let newDiv = document.createElement("div");
    document.body.append(newDiv)
    newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // div.append(div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
    onDiv();
}

// let body = document.querySelector('body');

// function dicso(){
//     let r = Math.round(Math.random()*256);
//     let g = Math.round(Math.random()*256);
//     let b = Math.round(Math.random()*256);

//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }

// body.addEventListener('mousemove', dicso)

function onDiv(){
    let div = document.getElementsByTagName('div')[0];
    div.addEventListener('mousemove', function(){
        let r = Math.round(Math.random()*256);
        let g = Math.round(Math.random()*256);
        let b = Math.round(Math.random()*256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}