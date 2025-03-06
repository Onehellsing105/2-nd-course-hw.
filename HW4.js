for (let i = 0; i < 2; i++) {
    console.log ("Привет");
}

for (let i = 0; i <= 5; i++) {
    console.log (i);
    
}

for (let i = 7; i <= 22 ; i++) {
    console.log (i);
}

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

let n = 1000;
let num = 0

for (;n >= 50; num++) {
    n = n / 2;
}

console.log(n);
console.log(num);


const firstfriday = 7;

for (let day = firstfriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}