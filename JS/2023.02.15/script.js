// Добавляем кнопку удаления для существующих элементов
let myNodeList = document.getElementsByTagName('li'); //обращаюсь ко всем существующим Li
for(let i = 0; i < myNodeList.length; i++){
    let span = document.createElement("span"); //создаю элемент с тегом span
    let txt = document.createTextNode("\u00d7") //создаю текст с определенным значением
    span.className = "close"; //задаю элементу с тегом span класс close
    span.append(txt); //добавляю созданный текст внутрь элемента span
    myNodeList[i].append(span); //добавляю span внутрь элементов li
}

// создаем тугл для проверки зачеркивания листа
let list = document.querySelector('ul'); //ищу элемент с тегом ul
list.addEventListener('click', function(ev){ //добавляю обработчик событий для клика
    if(ev.target.tagName === 'LI'){ //проверка на тег
        ev.target.classList.toggle('checked'); //тугл его класса добавляет/убирает checked
    }
}, false)

// функция удаления
let close = document.getElementsByClassName('close'); //ищет элементы с классом close
for(let i = 0; i < close.length; i++) { //т.к. getElementsByClassName всегда создает массив, создаю форик
    close[i].onclick = function() { //создаю функцию которая работает при клике на элемент класса close
        let div = this.parentElement; // обращаюсь к родительному элементу
        div.style.display = "none"; // меняю его тоображение на 0
    }
}

// функция создания нвоого элемента
function newElement(){
    let li = document.createElement('li'); //создаю элемент с тегом li
    let inputValue = document.getElementById('myInput').value; // выгружаю значение инпута
    let t = document.createTextNode(inputValue); //создаю текст
    li.append(t); //добавляю текст внутрь Li
    if(inputValue == ""){ //создаю проверку на пустоту инпута
        alert("Please enter something");
    }
    else{
        document.getElementById('myUl').append(li); //если инпут не пустой то добавляем его значение внутрь li
    }
    document.getElementById('myInput').value = ""; //обнуляем инпут

    let span = document.createElement("span"); 
    let txt = document.createTextNode("\u00d7")
    span.className = "close";
    span.append(txt);
    li.append(span);

    for(let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}