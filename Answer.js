// 建立Array (兩種方法)
var arr1 = [];
arr1 = [1, 2, 3];

var arr2 = new Array();
arr2 = new Array(4, 5, 6);

// 從後面新增元素
arr2.push(7, 8, 9);
// 從前面新增元素
arr2.unshift(1, 2, 3);
// 移除最後元素
arr2.pop();
// 合併Array
var arr3 = arr2.concat(arr1);

// init
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// 找第一個year小於1800的index (findIndex)
var Index = inventors.findIndex(function (item) {
  return item.year < 1800;
});
//console.log(Index);

// 找第一個year小於1800的item (find)
var firstItem = inventors.find(function (item) {
  return item.year < 1800;
});
//console.log(firstItem);

//找所有小於1800的item (filter)
var filterItem = inventors.filter(function (item) {
  return item.year < 1800;
});
//console.log(filterItem);

// 將所有year改成 1870
/*
inventors.forEach(function (item) {
  item.year = 1870;
});
console.log(inventors);
*/

// use map return a list (year > 1800 true; false)
var mapInventors = inventors.map(function (item) {
  return item.year > 1800;
});
//console.log(mapInventors); // [false, false, true ... 12 個]

// return true if inventors has (some) year >1870
var someInventors = inventors.some(function (item) {
  return item.year > 1800;
});
//console.log(someInventors);

// return true if inventors has (every) year >1870
var everyInventors = inventors.every(function (item) {
  return item.year > 1800;
});
//console.log(everyInventors);

//init
var special = [8, 0, 14];

// return max number (reduce)
var maxValue = special.reduce(function (a, b) {
  return Math.max(a, b);
});
//console.log(maxValue);

//init
var scores = [1, 10, 21, 2];

// sort scores
scores.sort(function (a, b) {
  return a - b;
});
// console.log(scores);

//init
var a = [1, 7, 9, 2, 3];

// reverse a -> [ 3, 2, 9, 7, 1 ]
a.reverse();
//console.log(a);

// init
const my_array = [5, 1, 3, 8, 6, 0];

// return [3, 8, 6] (slice)
slice1 = my_array.slice(2, 5);
//console.log(slice1);

// return [3, 8, 6, 0] (slice)
slice2 = my_array.slice(2);
//console.log(slice2);

// return [0] (slice)
slice3 = my_array.slice(-1);
//console.log(slice3);

/*
const my_array = [5, 1, 3, 8, 6, 0];
回答下列程式碼的output:

const spliceArray1 = my_array.splice(3)
console.log(spliceArray1); // [ 8, 6, 0 ]
console.log(my_array);  // [ 5, 1, 3 ]

//一樣可以接受負數
const spliceArray2 = my_array.splice(-1)
console.log(spliceArray2); // [ 0 ]
console.log(my_array); // [ 5, 1, 3, 8, 6 ]

const spliceArray3 = my_array.splice(1, 3)
console.log(spliceArray3); // [ 1, 3, 8 ]
console.log(my_array); // [ 5, 6, 0 ]

const spliceArray4 = my_array.splice(1, 3, 'Hana', 'Mike')
console.log(spliceArray4); // [ 1, 3, 8 ]
console.log(my_array);  // [ 5, 'Hana', 'Mike', 6, 0 ]
*/
