import {
  InsertionSort,
  bubblesSort,
  SelectionSort,
  ShellSort,
} from "./dist/Sort.js";
let arr = [12, 123, 41, 12, 3, 12, 3, 1231, 23];
console.log(InsertionSort(arr));
console.log(bubblesSort(arr));
console.log(SelectionSort(arr));
console.log(ShellSort(arr));
