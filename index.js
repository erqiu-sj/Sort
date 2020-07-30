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
const M = new ArrayList();
M.insert(12);
M.insert(234);
M.insert(12);
M.insert(12312);
M.insert(2341);
M.SelectionSort();
console.log(M.array);
