function minOfTwo(a, b) {
    return a < b ? a : b;
}

console.log (minOfTwo (10, 5));
console.log (minOfTwo (10, 10));

function checknumber (n) {
   return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(checknumber (10));
console.log(checknumber (7));

function square (f) {
    return f * f 
}

console.log(square (7));
console.log(square (50));
console.log(square (77));


function personAge(a) {
    const age = prompt("Сколько вам лет?");

    if (isNaN(age)) {
        alert("Вы ввели неправильное значение")
    } 
    
    else if (age < 0) {
        alert("Вы ввели неправильное значение")
    }

    else if (age >= 0 && age <= 12) {
        alert("Привет, друг!")
    }

    else if (age >= 13) {
        alert("Добро пожаловать!")
    }
}

personAge();


function multiplyNumbers(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return numA * numB;
    }
}

console.log(multiplyNumbers(5, 3));       
console.log(multiplyNumbers("4", 2));     
console.log(multiplyNumbers("abc", 10));  


function calculateCube(number) {
    return isNaN(number) ? 'Переданный параметр не является числом' : `${number} в кубе равняется ${number ** 3}`;
}
    
const userNumber = Number(prompt("Введите число:"));
console.log(calculateCube(userNumber));

const circle1 = {
    radius: 3, 
    p: 3.14,
    getArea() {
      return this.p * this.radius ** 2; 
    },
    getPerimeter() {
      return 2 * this.p * this.radius; 
    }
  };
  
  const circle2 = {
    radius: 6,
    p: 3.14,
    getArea() {
      return this.p * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * this.p * this.radius;
    }
  };

  console.log(circle1.getArea());
  console.log(circle1.getPerimeter())
  
  console.log(circle2.getArea()); 
  console.log(circle2.getPerimeter());