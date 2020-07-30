"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellSort = exports.InsertionSort = exports.SelectionSort = exports.bubblesSort = void 0;
/**
 *
 * @param arr Array<any>
 * @param m number
 * @param n number
 */
function swap(arr, m, n) {
  var temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
}
/**
 * 冒泡排序
 * @api bubblesSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
function bubblesSort(arr) {
  var length = arr.length;
  for (var i = length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
exports.bubblesSort = bubblesSort;
/**
 * 选择排序
 * @api SelectionSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
function SelectionSort(arr) {
  var length = arr.length;
  for (var j = 0; j < length - 1; j++) {
    var min = j;
    for (var i = min + 1; i < length; i++) {
      if (arr[min] > arr[i]) {
        min = i;
      }
      swap(arr, min, j);
    }
  }
  return arr;
}
exports.SelectionSort = SelectionSort;
/**
 * 选择排序
 * @api InsertionSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
function InsertionSort(arr) {
  var length = arr.length;
  for (var i = 1; i < length; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (arr[j] > temp && j > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
exports.InsertionSort = InsertionSort;
/**
 * 希尔排序
 * @api ShellSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
function ShellSort(arr) {
  var length = arr.length;
  var gap = Math.floor(length / 2);
  while (gap >= 1) {
    for (var i = gap; i < length; i++) {
      var tamp = arr[i];
      var j = i;
      while (arr[j - gap] > tamp && j > gap - 1) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = tamp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
exports.ShellSort = ShellSort;
