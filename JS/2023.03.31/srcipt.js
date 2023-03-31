// let box = document.getElementsByClassName('box');
// for(let i = 0; i < box.length; i++) {
//     box[i].onclick = changeColor;
//     console.log("asd");
// }

// console.log(box)

// function changeColor(){
//     this.style.backgroundColor = "green";
//     console.log("click")
// }

// $(document).ready(function(){
//     $('.box').on('click', function(){
//         $(this).css('background-color','green');
//     })
// });

// $(selector).action()    selector - tag, class, id, this, action() - любое действие, hide()

// $(document).ready(function(){
//     $('.box').click(function(){
//         $("p").hide();
//     })
// })
$(document).ready(function(){
    $('.box').on({
        mouseenter: function(){
            $(this).css('background-color','green');
        },
        mouseleave: function(){
            $(this).css('background-color','red');
        },
        click: function(){
            $('p').css('background-color','cyan');
        },
    })
})

// Селекторы jQuery
// ${'*'}
// ${this}
// ${'div'}
// ${'div.box'}
// ${'ul li:first'} - первый элемент li первого элемента ul
// ${'ul li:first-child'} - первый элемент li каждого элемента ul 
// ${'ul li:last-child'} - последний элемент li каждого элемента ul 
// $('[href]') - элементы с атирбутом href
// $('a[target]=_blank') - теги а которые имеют значение атрибута target равный _blank
// $('a[target]!=_blank') - теги а которые не имеют значение атрибута target равный _blank
// $('ul li:even') - четные
// $('ul li:odd') - нечетные
// $(':button) - все теги button и инпуты тип котроых равен button