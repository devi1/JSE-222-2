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

jump.src = "audio/jump.mp3";
score_audio.src = "audio/score.mp3";

let gap = 90;

// Движение вверх
document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 15;
    jump.play();
}

// Создание блоков
let pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
}

// Подсчет очков
let score = 0;
let state = true;

// Позиция птички
let xPos = 10;
let yPos = 10;
let gravity = 1.5;

function draw(){
    ctx.drawImage(bg, 0,0);

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)

        pipe[i].x--;

        if(pipe[i].x == 60){
            pipe.push({
            x : cvs.width,
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
        });
        }

        //Отслеживание прикосновения
        if(xPos + bird.width >= pipe[i].x && 
        xPos <= pipe[i].x + pipeUp.width &&
        (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos+bird.height >= cvs.height-fg.height){
            state = false;
            return false;
        }

        if(pipe[i].x == 5){
            score++;
            score_audio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += gravity;

    ctx.fillStyle = "black";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20)

    requestAnimationFrame(draw);

    return state;
}

if(state == true){
    pipeBottom.onload = draw;
}