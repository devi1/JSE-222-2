$(document).ready(function(){
    $("#btn1").click(function(){
        // console.log($("div").text())
        // console.log($("input").val())
        $('div').toggleClass("myDiv")
    })
    $("#btn2").click(function(){

        // $("div").prepend("<input type='text' value='v,cbphweroj;dkhfhid'>")
        // $("div").remove('.div2')
        // $("div").empty()
        $("a").attr('href', "netflix.com")
        $("a").text('Netflix')
        // $('div').removeClass("myDiv")
    })

})

// 1. У вас будет инпут в который вы можете задавать разные значения это rgb, rgba и HEX коды. Вы должны достать эти значения и присовить их созданному диву и всем его child.

// 2. Имеется селект с тремя значениям это RGB, RGBA и HEX, В зависимости от того какой option селекта выбран, вам выдается инпуты. Если rgb - 3 инпута, rgba - 4 инпута, hex - 1 инпут. 

// 3. Доп задание(за 2 кристалика). Имеется селект с тремя значениям это RGB, RGBA и HEX, В зависимости от того какой option селекта выбран, меняется проверка. То есть если rgb то проверка должна пропускать только шаблон rgb, rgba - шаблон rgba а hex только шаблон HEX соответственно.