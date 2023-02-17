//Перечислить методы объектов и написать что делают

let obj1 = {
    a: 1,
    b: 2, 
    c: 3,
}

console.log (Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));


//Перечислить методы массивов и написать что делают. Некоторые методы:
let arr = [1, 2, 3, 4, 5, 6];
arr.push(3);
arr.pop();
arr.splice(1, 3);
let arr2 = arr.slice(0, 3);
console.log(arr.indexOf(1, 0));
console.log(arr.includes(3));
let arr3 = arr.filter(item => item > 1);
let arr4 = arr3.map(item => item * 2);
arr.sort((a, b) => a - b);
arr.reverse();


//Для чего используется setTimeout()?
function show(){
    console.log('Hello');
}

let timer = setTimeout(show, 2000);


//Для чего используется setInterval()?
let interval = setInterval(show, 1000);


//Что делает JSON.stringify()?
let str = JSON.stringify(arr);

//Как получить текущую дату?
let now = new Date();
console.log(now);

//Как сравнить два объекта? Один из вариантов:
let obj2 = {a:1, c:3, z:{m:3}};
let obj3 = {a:1, c:3, z:{m:3}};
console.log(JSON.stringify(obj2) == JSON.stringify(obj3));


//Как создать копию объекта?
let copy = Object.assign({}, obj2);


//Как добавить новое свойство в объект?
let obj4 = {name: John, age: 22};
obj4.city = NY;

//Как реализовать функцию, возвращающую случайное целое число в заданном диапазоне?
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


//Для чего используется оператор spread… ?
let objects = {...obj1, ...obj2}


//Для чего используется WeakSet?
let unic = new WeakSet();
unic.add(obj2);
unic.add(obj3);
// если сделать: obj2 = null, то он удалится из unic сборщиком мусора


//Что такое анонимная функция?
function (){
    console.log('Hi');
};

() => {
    console.log('Hello');
}


//Что такое функция-конструктор?
function NewObj (name, age){
    this.name = name;
    this.age = age;
}

//Что делает оператор NEW?
let arr6 = new Array();
arr6.push(23);