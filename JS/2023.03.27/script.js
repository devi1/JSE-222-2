let user = {
    name: 'John',
    age: 36,
    qwertyu: undefined,
    surname: 'John',
    wife: true,
    kids: ['Adam', 'Nicole', 'James', 12, 65, 98765434],
    sayHello(){
        alert('Hello');
    }
}

let json = JSON.stringify(user)  //Сериализованный или же JSON - форматированный объект

// console.log(typeof json)
// console.log(typeof user)
// console.log(json)
console.log(user)

let student = {
    name: 'Student',
    age: 18,
    class: {
        title: 'Students class',
        room: 123,
        teacher: 'Mr. Johnson'
    }
}

// console.log(JSON.stringify(student))

console.log(JSON.parse(json));

//Взять JSOn из сата https://json.org/example.html, после спарсить его в объект и взять данные title: "example glossary", title: "S", Abbrev: "ISO 8879:1986". Все это запихнуть в созданный DIV в качестве h1, h2 и p