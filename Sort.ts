/**
 *
 * @param arr Array<any>
 * @param m number
 * @param n number
 */
function swap(arr: Array<any>, m: number, n: number): void {
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
}
/**
 * 冒泡排序
 * @api bubblesSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
export function bubblesSort(arr: Array<any>): Array<any> {
  const length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
/**
 * 选择排序
 * @api SelectionSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
export function SelectionSort(arr: Array<any>): Array<any> {
  let length = arr.length;
  for (let j = 0; j < length - 1; j++) {
    let min = j;
    for (let i = min + 1; i < length; i++) {
      if (arr[min] > arr[i]) {
        min = i;
      }
      swap(arr, min, j);
    }
  }
  return arr;
}
/**
 * 选择排序
 * @api InsertionSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
export function InsertionSort(arr: Array<any>): Array<any> {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (arr[j] > temp && j > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
/**
 * 希尔排序
 * @api ShellSort(arr: Array<any>): Array<any>
 * @param arr Array<any>
 */
export function ShellSort(arr: Array<any>): Array<any> {
  let length = arr.length;
  let gap = Math.floor(length / 2);
  while (gap >= 1) {
    for (let i = gap; i < length; i++) {
      let tamp = arr[i];
      let j = i;
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
