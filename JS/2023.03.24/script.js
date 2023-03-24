// let httpRequest;

// if (window.XMLHttpRequest){ // Mozilla, Safari etc.
//     httpRequest = new XMLHttpRequest();
// }

// else if(window.ActiveXObject){ // IE
//     httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
// }

// let httpRequest = new XMLHttpRequest();
// httpRequest.overrideMimeType('text/xml'); //Перезаписываем ответ, в случае если заголовок ответа от сервера не содержит в себе XML

// httpRequest.onreadystatechange = functionName; // При получении ответа от сервера указываем выполняемую функцию или же ссылаемся на нее.

// httpRequest.onreadystatechange = function(){
//     // код выполнения
//     console.log("Hello!")
// };

// httpRequest.open('GET', 'http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/xml/note.xml', true)
// httpRequest.send(null);

// if(httpRequest.readyState == 4){
//     // All right. Respond is complete
// }
// else if(httpRequest.readyState == 3){
//     // Response is interactive
// }
// else if(httpRequest.readyState == 2){
//     // Response is loaded
// }
// else if(httpRequest.readyState == 1){
//     // Response is loading
// }
// else if(httpRequest.readyState == 0){
//     // Response is uninitialised
// }

// if(httpRequest.status == 200){
//     console.log("Response was successfully returned")
// }

// 1XX Informational
// 2XX Success
// 3XX Redirection
// 4XX Client Error
// 5XX Server Error

function makeRequest(url){
    let httpRequest = false;

    if(window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
        if(httpRequest.overrideMimeType){
            httpRequest.overrideMimeType('text/xml');
        }
    }
    else if(window.ActiveXObject){
        try{
            httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch(e){
            try{
                httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch(e){};
        }
    }

    if(!httpRequest){
        console.log("Have no response");
        return false;
    }
    httpRequest.onreadystatechange = function(){checkStatus(httpRequest);}
    httpRequest.open('get', url, true);
    httpRequest.send(null);
}

function checkStatus(httpRequest){
    if(httpRequest.readyState == 4){
        if(httpRequest.status == 200){
            let xmldoc = httpRequest.responseXML;
            let root_node = xmldoc.getElemntsByTagName('root').item(0);
            console.log(root_node.firstChild.data)
        }
        else{
            console.log("Something went wrong")
        }
    }
}