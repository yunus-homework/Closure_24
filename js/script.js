const generationNumArr = function () {
  const arr = [];
  return function randomNumber() {
    const newNum = Math.floor(Math.random() * 100 + 1);
    if (arr.length === 100) {
      return;
    }

    if (arr.includes(newNum)) {
      return randomNumber();
    }
    arr.push(newNum);
    return newNum;
  };
};

const result = generationNumArr();

console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

// Сделайте функцию, каждый вызов который будет генерировать случайные
// числа от 1 до 100, но так, чтобы они не повторялись, пока не будут
// перебраны все числа из этого промежутка. Решите задачу через
// замыкания - в замыкании должен хранится массив чисел, которые уже
// были сгенерированы функцией.
