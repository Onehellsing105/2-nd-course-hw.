// 1
const text = "js";
const upptext = text.toUpperCase();
console.log(upptext);

// 2
function filterStringsByPrefix(arr, prefix) {
    const result = [];
    const lowerPrefix = prefix.toLowerCase();
    
    for (const str of arr) {
      if (str.toLowerCase().startsWith(lowerPrefix)) {
        result.push(str);
      }
    }
    
    return result;
  }

const fruits = ['Apple', 'Banana', 'apricot', 'Orange', 'Grape', 'apple pie'];
const result = filterStringsByPrefix(fruits, 'ap');
console.log(result);

// 3
const num = 32.58884;

console.log('Исходное число:', num);
console.log('До меньшего целого:', Math.floor(num));  
console.log('До большего целого:', Math.ceil(num));    
console.log('До ближайшего целого:', Math.round(num)); 

// 4
const numbers = [52, 53, 49, 77, 21, 32];

const minnum = Math.min(...numbers);
const maxnum = Math.max(...numbers);

console.log(minnum);
console.log(maxnum);

// 5
function generatingNumbers() {
    return Math.floor(Math.random() * 10) + 1;
}

const randomNum = generatingNumbers();
console.log(randomNum);

// 6

function generateRandomArray(num) {
    const length = Math.floor(num / 2);
    return Array.from({length}, () => Math.floor(Math.random() * (num + 1)));
}

console.log(generateRandomArray(10)); 
console.log(generateRandomArray(8)); 
console.log(generateRandomArray(20)); 

// 7

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(1, 10));
console.log(getRandomInRange(4, 12));
console.log(getRandomInRange(10, 10));

// 8

console.log(new Date());

// 9

const currentDate = new Date();

const futureDate = new Date(currentDate);

futureDate.setDate(futureDate.getDate() + 73);

console.log('Дата через 73 дня:', futureDate.toLocaleDateString());

// 10
    
function formatRussianDate(date) {
    const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const weekDays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekDay = weekDays[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekDay}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatRussianDate(now));