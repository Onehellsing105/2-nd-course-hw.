let a = 10;
alert(a);

a = 20;
alert(a)

let ageoneiphone = 2007;
alert(ageoneiphone);

let nameCreatorJS = "Брендан Эйх";
alert(nameCreatorJS);

a = 10;
let b = 2;
let multiply = a*b;
alert(multiply)
let toShare = a/b;
alert(toShare);
let toFold = a+b;
alert(toFold);
let subtract = a-b;
alert(subtract);

a = 2;
alert(a**5);

a = 9;
b = 2;
c = 9 % 2;
alert(c)

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
    name: "Иван",
    age: 24,
    isAdmin: false
};


const userName = prompt("Как вас зовут?");

alert(`Привет ${userName}!`);



const number = parseFloat(prompt("Загадайте любое число:"));

const doubledNumber = number * 2;

alert(`Удвоенное число= ${doubledNumber}`);

const plusTen = doubledNumber + 10;

alert(`Удвоенное число + 10= ${plusTen}`);

const dividedByTwo = plusTen / 2;

alert(`Результат деления на 2= ${dividedByTwo}`);

const finalResult = dividedByTwo - number;

alert(`Результат после вычитания ${number}(ваше число): ${finalResult}`);

alert("Ответ равен 5!");