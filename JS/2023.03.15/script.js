let input = document.getElementById('color');

function save(){
    localStorage.setItem('color', input.value);
    console.log(localStorage.getItem('color'));
    let color = localStorage.getItem('color');
    let rgx = /[a-f0-9]/gi
    if(color.match(rgx) != null && color.match(rgx).length == 6){
        let div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.backgroundColor = `${color}`;
        document.body.append(div);
    }
    else{
        alert('Invalid color');
    }
}
