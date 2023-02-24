let form = document.forms.myForm; // обращение к форме по ее имени

console.log(form);

let second = form.elements.first; // обращение к инпуту внутри формы по его имени

console.log(second[0].value);

console.log(document.forms); 

let formTwo = document.forms[1]; // обращение к форме по ее индексу

let secondTwo = formTwo.elements.second;    
console.log(secondTwo.value);

// change - при изменнении 
// input - при вводе 
// focus - при фокусировке(когда курсор остается в нем)
// blur - при расфокусировке

console.log(select.value);

select.value = 'two';

console.log(select.value);

select.selectedIndex = 2;

console.log(select.value);

select.options[0].selected = true;

console.log(select.value);

// Строка 23, 27, 31 отвечают за одно и тоже меняет выбранный option

// let option = new Option("4", "four")

// 1. Дается селект в котором есть несколько option. После того как пользователь выбирает один из options Алертить или же выводить в консоль значение данного optioin
// 2. Дается форма с тестом. В этом тесте есть несколько вопросов. Пользователь отвечает на эти вопросы. После нажатия кнопки завершить, Алертнуть или же вывести в консоль количество правильних и неправильных ответов.
// 3. Есть блок с большим текстом. Над текстом есть несколько вариантов стилизования текста(жирный, курсив, зачеркнутый и подчеркнутый). При выборе одноой из данных радио кнопок, менять текст внутри поля на соответствующий стиль.
 