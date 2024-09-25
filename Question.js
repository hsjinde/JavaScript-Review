// 建立Array (兩種方法)

// 從後面新增元素

// 從前面新增元素

// 移除最後元素

// 合併Array

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

// 找第一個year小於1800的item (find)

//找所有小於1800的item (filter)

// 將所有year改成 1870
//console.log(inventors); // 全部 12 個的 year = 1870

// use map return a list (year > 1800 true; false)
//console.log(mapInventors) // [false, false, true ... 12 個]

// return true if inventors has (some) year >1870

// return true if inventors has (every) year >1870

//init
var special = [8, 0, 14];

// return max number (reduce)

//init
var scores = [1, 10, 21, 2];

// sort scores

//init
var a = [1, 7, 9, 2, 3];

// reverse a -> [ 3, 2, 9, 7, 1 ]

// init
const my_array = [5, 1, 3, 8, 6, 0];

// return [3, 8, 6] (slice)

// return [3, 8, 6, 0] (slice)

// return [0] (slice)

/*
回答下列程式碼的output:

const spliceArray1 = my_array.splice(3)
console.log(spliceArray1); 
console.log(my_array); 

//一樣可以接受負數
const spliceArray2 = my_array.splice(-1)
console.log(spliceArray2); 
console.log(my_array);

const spliceArray3 = my_array.splice(1, 3)
console.log(spliceArray3); 
console.log(my_array);

const spliceArray4 = my_array.splice(1, 3, 'Hana', 'Mike')
console.log(spliceArray4); 
console.log(my_array); 

*/
