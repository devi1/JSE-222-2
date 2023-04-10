function loadData(){
    let http = new XMLHttpRequest();
    http.onload = function(){
        loadXML(this)
    }
    http.open('GET', 'catalog.xml');
    http.send();
}

function loadXML(xml){
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName('CD');
    let table = "<tr><th>ARTIST</th><th>COUNTRY</th></tr>";
    for(let i = 0; i < x.length; i++){
        table += "<tr><td>" + x[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName('COUNTRY')[0].childNodes[0].nodeValue + "</td></tr>"
    }
    document.getElementById("demo").innerHTML = table;
}

//Достать цвета из colors.xml файла и создать дивы фон которых будет соответсвовать каждому цвету, все это должно выполняться по нажатию кнопки