let cvs = document.getElementById('cvs');
let ctx = cvs.getContext('2d');

// cvs.width = 1000;
// cvs.height = 1000;

// ctx.fillStyle = "red";
// ctx.strokeRect(15,15,266,266);
// ctx.strokeRect(23,23,250,250);
// ctx.fillRect(28,28,240,240);
// // ctx.clearRect(38, 38, 220, 220);

// for(let i = 0; i < 8; i++) {
//     for(let j = 0; j < 8; j++) {
//         ctx.clearRect(20+i*16, 20+j*16, 16,16);
//         ctx.clearRect(20+(i+1)*16, 20+(j+1)*16, 16,16);
//     }
// }
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.arc(80,100, 56, 3/4*Math.PI, 1/4*Math.PI, true);
// // ctx.fill();
// ctx.moveTo(40,140);
// ctx.lineTo(20,40);
// ctx.lineTo(60,100);
// ctx.lineTo(80,20);
// ctx.lineTo(100,100);
// ctx.lineTo(140,40);
// ctx.lineTo(120,140);
// ctx.stroke();

// добавляем изображения
let bird = new Image()
let bg = new Image()
let fg = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

//Указываем их путь
bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";


//Добавляем звуковые эффекты
let jump = new Audio();
let score_audio = new Audio();