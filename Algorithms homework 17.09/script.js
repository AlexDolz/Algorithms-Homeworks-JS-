let num = prompt('Enter any number');

if (num == 1) {
  console.log('Один');
} else if (num == 2) {
  console.log('Два');
} else if (num == 3) {
  console.log('Три');
} else if (num == 4) {
  console.log('Четыре');
} else if (num == 5) {
  console.log('Пять');
} else {
  console.log('Неверный формат');
}

switch (num) {
  case '1':
    console.log('Один');
    break;
  case '2':
    console.log('Два');
    break;
  case '3':
    console.log('Три');
    break;
  case '4':
    console.log('Четыре');
    break;
  case '5':
    console.log('Пять');
  default:
    console.log('Неверный формат');
}

for (let i = 1; i <= 99; i++) {
  square = Math.sqrt(i);
  console.log(square);
}
