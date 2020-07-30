function ArrayList() {
  this.array = [];
}
ArrayList.prototype.insert = function (item) {
  this.array.push(item);
};
ArrayList.prototype.toString = function () {
  this.array.join("-");
};
ArrayList.prototype.swap = function (m, n) {
  var temp = this.array[m];
  this.array[m] = this.array[n];
  this.array[n] = temp;
};
// 冒泡排序
ArrayList.prototype.bubblesSort = function () {
  const length = this.array.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (this.array[j] > this.array[j + 1]) {
        this.swap(j, j + 1);
      }
    }
  }
};
// 选择排序
ArrayList.prototype.SelectionSort = function () {
  let length = this.array.length;
  for (let j = 0; j < length - 1; j++) {
    let min = j;
    for (let i = min + 1; i < length; i++) {
      if (this.array[min] > this.array[i]) {
        min = i;
      }
      this.swap(min, j);
    }
  }
};
// 插入排序
ArrayList.prototype.InsertionSort = function () {
  let length = this.array.length;
  for (let i = 1; i < length; i++) {
    let temp = this.array[i];
    let j = i - 1;
    while (this.array[j] > temp && j > 0) {
      this.array[j] = this.array[j - 1];
      j--;
    }
    this.array[j] = temp;
  }
};
// 希尔排序
ArrayList.prototype.ShellSort = function () {
  let length = this.array.length;
  let gap = Math.floor(length / 2);
  while (gap >= 1) {
    for (let i = gap; i < length; i++) {
      let tamp = this.array[i];
      let j = i;
      while (this.array[j - gap] > tamp && j > gap - 1) {
        this.array[j] = this.array[j - gap];
        j -= gap;
      }
      this.array[j] = tamp;
    }
    gap = Math.floor(gap / 2);
  }
};
const M = new ArrayList();
M.insert(12);
M.insert(234);
M.insert(12);
M.insert(12312);
M.ShellSort();
console.log(M.array);
