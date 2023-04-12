console.log(document.cookie);
let container = document.querySelector('.container');

let template_name = new RegExp();
template_name = /[^\s]$/
let template_RGB = new RegExp();
template_RGB = /(\s*\d+\s*,){2}\s*[\d]+/;
let template_RGBA = new RegExp();
template_RGBA = /(\s*\d+\s*,){2}\s*[\d\.]+/;
let template_HEX = new RegExp();
template_HEX =  /[a-fA-F0-9]{6}/;

// R  G  B  - (R,G,B)
// FF FF FF - (255, 255, 255)

container.addEventListener("click", function(){
    let input_code = document.querySelector(".input_code");
    var type_color = document.querySelector("#selected").value;
    
    if(type_color === "RGB"){
        input_code.placeholder = "0-255, 0-255, 0-255"
    }
    else if (type_color === "RGBA"){
        input_code.placeholder = "0-255, 0-255, 0-255, 0.0"
    }
    else if (type_color === "HEX"){
        input_code.placeholder = "00ff00"
    }
})

function checkForm(){
    console.log("Checking")
    let input_code_value = document.querySelector(".input_code").value;
    type_color = document.querySelector("#selected").value
    let name = document.querySelector(".input_name").value
    let wrongcode = document.querySelector(".wrongcode");
    if(!template_name.test(name)){
        document.querySelector(".wrongname").innerHTML = "You entered wrong name";
        return false;
    }
    if(type_color ==="RGB"){
        if(!template_RGB.test(input_code_value)){
            wrongcode.innerHTML = "You entered wrong code. It must be 0-255, 0-255, 0-255 template";
            console.log("Wrong");
            return false;
        }
    }
    else if(type_color ==="RGBA"){
        if(!template_RGBA.test(input_code_value)){
            wrongcode.innerHTML = "You entered wrong code. It must be 0-255, 0-255, 0-255, 0.0 template";
            console.log("Wrong");
            return false;
        }
    }
    else if(type_color ==="HEX"){
        if(!template_HEX.test(input_code_value)){
            wrongcode.innerHTML = "You entered wrong code. It must be 00FF00 template";
            console.log("Wrong");
            return false;
        }
    }
    else{
        console.log("All good!")
        return true;
    }
    console.log("All good")

    let spanNameColor = document.createElement("span");
    let spanTypeColor = document.createElement("span");
    let spanCode = document.createElement("span");
    let divColor = document.createElement("div");

    spanNameColor.textContent = name;
    spanTypeColor.textContent = type_color;
    spanCode.textContent = input_code_value;
    divColor.append(spanNameColor);
    divColor.append(spanTypeColor);
    divColor.append(spanCode);
    divColor.className = "divColor";
    document.querySelector(".box").append(divColor);
    switch(type_color) {
        case "RGB":
            divColor.style.backgroundColor = `rgb(${input_code_value})`
            break;
        case "RGBA":
            divColor.style.backgroundColor = `rgba(${input_code_value})`
            break;
        case "HEX":
            divColor.style.backgroundColor = `#${input_code_value}`
            break;
    }
    document.cookie = `color: ${name}`
    document.cookie = `type: ${type_color}`
    document.cookie = `code: ${input_code_value}`
}