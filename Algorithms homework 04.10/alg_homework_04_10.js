/*Second level: Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
Массив 1 - 100 112 256 349 770
Массив 2 - 72 86 113 119 265 445 892
к = 7
Вывод : 256
Окончательный отсортированный массив -
72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
6-й элемент этого массива равен 256.
*/

const array = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];

const sortedArray = [];

const mergeSort = (array, array2) => {
  while (array.length && array2.length) {
    if (array[0] < array2[0]) {
      sortedArray.push(array.shift());
    } else {
      sortedArray.push(array2.shift());
    }
  }
  return [...sortedArray, ...array, ...array2];
};

console.log(mergeSort(array, array2));

const findElement = sortedArray => {
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === 256) {
      return `${i} element in the array is equal to ${sortedArray[i]}`;
    }
  }
};

console.log(findElement(sortedArray));
