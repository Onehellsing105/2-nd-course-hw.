const n = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < n.length; i++) {

    console.log(n[i]);
    
    if (n[i] === 10) {

        break; 
    }
}

const s = [1, 5, 4, 10, 0, 3];

const index =s.indexOf(4);

console.log(index); 

const a = [1, 3, 5, 10, 20];
const result = a.join(' ');

console.log(result);


const size = 3; 
const multiArray = []; 

for (let i = 0; i < size; i++) {
    const row = [];
    
    for (let j = 0; j < size; j++) {
        row.push(1); 
    }
    
    multiArray.push(row);
}

console.log(multiArray);

const l = [1,1,1];

l.push(2, 2, 2);

console.log(l);

const number = [9, 8, 7, 'a', 6, 5];

number.sort((a,b) => a - b);
number.pop();
console.log(number);


const massiv = [9, 8, 7, 6, 5];

const usernum = prompt("Угадайте число от 1 до 10:");

if (massiv.includes(Number(usernum))) {
    alert("угадал!");
} else {
    alert("не угадал!");
}


const abc = 'abcdef';

const revers = abc.split('').reverse().join('');

console.log(revers);

const z = [[1, 2, 3],[4, 5, 6]];
const x = [...z[0], ...z[1]];
console.log(x);

const numbers = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i]; 
    const next = numbers[i + 1]; 
    const sum = current + next;

    console.log(`Сумма элементов ${current} и ${next}: ${sum}`);
}



function getSquares(numberss) {
    return numberss.map(number => number * number);
}

const numberss = [1, 2, 3, 4, 5];
const squares = getSquares(numberss);

console.log(squares); 

function lettercount(words) {
    return words.map(words => words.length);
}

const words = ["apple", "banana", "cherry", "pineapple"];
const lengths = lettercount(words);
console.log(lengths);

function getNegativeNumbers(chisla) {
    return chisla.filter(chislo => chislo < 0);
}

const chisla = [1, -1, 2, -2, 3, -3];
const negativeNumbers = getNegativeNumbers(chisla);
console.log(negativeNumbers);


const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = originalArray.filter(number => number % 2 === 0);

console.log(originalArray);
console.log(evenNumbers);


const quantity = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const average = quantity.reduce((sum, number) => sum + number, 0) / numbers.length;

console.log(quantity);
console.log(average);