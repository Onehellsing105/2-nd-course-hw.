// 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

console.log(people.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  }));

// 2
  function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (const item of array) {
        if (ruleFunction(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];

 console.log(filter(people2, isMale));

//  3
function formatDate(date) {
    return date.toLocaleString('ru-RU');
  }

let elapsedTime = 0;
const totalDuration = 30000;
const interval = 3000; 

const timer = setInterval(() => {

  console.log(formatDate(new Date()));
  
  elapsedTime += interval;
  
  if (elapsedTime >= totalDuration) {
    clearInterval(timer); 
    console.log('30 секунд прошло');
  }
}, interval);

console.log(formatDate(new Date()));

// 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
 console.log('Привет, Глеб!');
});

// 5

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))