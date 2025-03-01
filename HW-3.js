let password = '1234';

let userInput = prompt('Введите пароль');

if (userInput === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}


let c = 7;

if (c < 10 && c > 0) 
  {console.log('Верно')}

   else {console.log('Неверно')
}

let d =666

let e =55

if (d > 100 || e > 100) {
  console.log('Верно')
} else {
  console.log('Неверно')
}

let a = '2';
let b = '3';

alert(Number(a) + Number(b));


let monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
  console.log("Недопустимый номер месяца. Введите число от 1 до 12.");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;
    default:
      console.log("Недопустимый номер месяца.");
  }
}

let yournumber = prompt('Пожалуйста, введите любое число');
let number = parseInt(yournumber);

if (isNaN(number)) {
  alert("Вы ввели не число. Пожалуйста, введите корректное число.");
} else {if (number % 2 === 0) {
  alert("Число чётное.");
} else {
  alert("Число нечётное.");
}
}


let clientOS = 0;

if (clientOS===0) {
  console.log ('Установите версию приложения для iOS по ссылке')
} else {
  console.log ('Установите версию приложения для Android по ссылке')
}


let ClientOS = 0;
let clientDeviceYear = 2020;

if (clientDeviceYear >= 2015) {
  if (ClientOS === 0) {
    alert("Установите приложение для iOS по ссылке.");
  } else {
    alert("Установите приложение для Android по ссылке.");
  }
} else {
  if (ClientOS === 0) {
    alert("Установите облегченную версию приложения для iOS по ссылке.");
  } else {
    alert("Установите облегченную версию приложения для Android по ссылке.");
  }
}



