//1. Linear Search
// Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .

const array = [1, 4, 5, 8, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}
console.log(linearSearch(array, 8));
console.log(`count = ${count}`);

// linearSearch, 0(n)

//2. Find the element that appears once in a sorted array
// Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.

// public class SpaceConplexity {
//     public static void main(String[] args) {
//         int  [] array  =  new int  [] {5,  5,  2, 2,  4, 3, 3, 1, 1};            // arr[] = 1
//         int  [] array2 =  new int  [] {5, 2, 4, 3, 3, 1};               // arr[] = 1
//         int  [] array3 =  new int  [] {55, 22, 22, 45, 45, 38, 38, 11, 11};      // arr[] = 1
//         int  [] array4 =  new int  [] {555, 555, 227, 227, 45, 45, 38, 11, 11};  // arr[] = 1

//            System.out.println(aloneSearch(array));
//             System.out.println(aloneSearch(array2));
//             System.out.println(aloneSearch(array3));
//             System.out.println(aloneSearch(array4));

//     }
// 1. обойти массив
// 2. сравнить данный элемент х с элементами массиве
// 3. если найден, верни индекс элемента
// 4. если элемент не найден, верни -1
//     private static int aloneSearch(int[] intArr) {

//         int max;
//         for (int i = 0; i < intArr.length; i += 2) {
//                 if (intArr[i] != intArr[i+1]) {
//                     return intArr[i];
//                 }
//             }

//             return -1;
//         }

// }
// space complexity = 1
// S(A) = 1 + 1 + 1 + 1 = 4 = 1
