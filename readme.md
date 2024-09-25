---
title: 前端工程師用 javaScript 學演算法

---



# Reference

[文章連結](https://ithelp.ithome.com.tw/users/20106426/ironman/2136?page=1)



# [陣列 Array](https://ithelp.ithome.com.tw/articles/10213787)

## 建立Array
```javascript=
// 1 literal
// 最常見到也是最推薦的
let arrLiteral = []; // Empty Array
let arrLiteral = [1, 2, 3];
    
// 2 by constructor
// 比較不建議因為效能較差而且會有一些無法預期的結果
// 例如 new Array(3) 會建立 3 個 empty Array
let arrConstructor = new Array() // Empty Array
let arrConstructor = new Array(1, 2, 3)
```

## 常見 Array 方法

![20106426psTRBiwFBt](https://hackmd.io/_uploads/HylammmoR.png)

### Basic Array Method

- push
- unshift
- pop // 移除最後
- shift // 移除最前
- concat

```javascript=
// init
const colors = ['red', 'yellow', 'blue'];

colors.push('purple', 'green'); 
// ['red', 'yellow', 'blue', 'purple', 'green']

colors.unshift('purple', 'green');
// ['purple', 'green', 'red', 'yellow', 'blue' ]

colors.pop(); 
// ['red', 'yellow']

colors.shift();
// ['yellow', 'blue' ]

const colors2 = ['grey', 'black', 'white'];
const newColor = colors.concat(colors2);
// ['red', 'yellow', 'blue', 'grey', 'black', 'white' ]
```

### Filter / Find
```javascript=
// init
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
```
- findIndex(item, index, array)
```javascript=
const findIndexEmpty = inventors.findIndex(function(item){
 
})
console.log(findIndexEmpty) // 沒有找到會回傳 -1
console.log(inventors) // 原本的 array

const findIndexInventors = inventors.findIndex(function(item){
    return item.year > 1870;
})
console.log(findIndexInventors) // 0
// 有好幾個是 > 1800 的，但他只會回傳第一個抓到的 index
```
- find(item, index, array)
```javascript=
const findEmpty = inventors.find(function(item){
 
})
console.log(findEmpty) // 沒有條件會 undefined
console.log(inventors) // 原本的 array
 
const findInventors = inventors.find(function(item){
    return item.year > 1870;
})
console.log(findInventors) // 有好幾個是 > 1800 的，但他只會回傳第一個抓到的
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }
```
- filter(item, index, array)
```javascript=
const filterEmpty = inventors.filter(function(item){
 
})
console.log(filterEmpty) // 沒有條件會 undefined
console.log(inventors) // 原本的 array
 
const filterInventors = inventors.filter(function(item){
    return item.year > 1870;
})
console.log(findInventors)
// [{first: "Albert", last: "Einstein", year: 1879, passed: 1955}
// {first: "Katherine", last: "Blodgett", year: 1898, passed: 1979},
// {first: "Lise", last: "Meitner", year: 1878, passed: 1968}]
```
- forEach(item, index, array)
```javascript=
const forEachInventors = inventors.forEach(function(item){
    return item.year > 1870;
})
console.log(forEachInventors) // undefined, 不會 return 東西
 
inventors.forEach(function(item){
    item.year =  1870;
})
console.log(inventors) // 全部 12 個的 year = 1870
```
- map(item, index, array)
```javascript=
const mapInventors = inventors.map(function(item){
    return item.year > 1870;
})
console.log(mapInventors) // [false, false, true ... 12 個]
console.log(inventors) // 原本的 array
 
const mapInventors2 = inventors.map(function(item){
    if(item.year > 1870){
        return `${item.year}歲`;
    }
    return false;
})
console.log(mapInventors2) // ["1879歲", false, false....]
// 不論是空的或是 false，都會回傳
```
- some(item, index, array)
```javascript=
const someInventors = inventors.some(function(item){
    return item.year > 1870;
})
console.log(someInventors) // true
console.log(inventors) // 原本的 array
```
- every(item, index, array)
```javascript=
const everyInventors = inventors.every(function(item){
    return item.year > 1870;
})
console.log(everyInventors) // false
console.log(inventors) // 原本的 array
```


### Special Method
- reduce(accumulator, currentValue, currentIndex, array [, initialValue])
- sort(compareFunction)
- reverse()
```javascript=
//init
var special = [8, 0, 14];

const reduceArray = special.reduce(
function(accumulator, currentValue, currentIndex){
    return Math.max(accumulator, currentValue);
})
console.log(reduceArray) // 14
console.log(special) // 原本的 array


// 給初始值的狀況
const reduceArray2 = special.reduce(
function(accumulator, currentValue, currentIndex){
    return Math.max(accumulator, currentValue);
},30)
console.log(reduceArray2) // 30
```

![20106426lMr6paV9yw](https://hackmd.io/_uploads/r17VDvEoC.png)

![20106426G1mzVp4XgS](https://hackmd.io/_uploads/HJONDv4j0.png)

```javascript=
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']
 
var scores = [1, 10, 21, 2];
scores.sort(); // [1, 10, 2, 21]
// 跟你想的不一樣吧，因為 10 是兩個數字組成，
// 在 unicode 裡 32(數字2） > 31(1 開頭的任何數字)
 
var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
```

```javascript=
var a = [1, 7, 9, 2, 3];
a.reverse();
// [ 3, 2, 9, 7, 1 ]   
```

### Operation

- slice(start, end)

```javascript=
const sliceArray = my_array.slice(2,5);
console.log(sliceArray); // [3, 8, 6]
console.log(my_array); // [5, 1, 3, 8, 6, 0] 不會變
```

![201064263zvGCXr9qy](https://hackmd.io/_uploads/SyqGKv4sC.png)

```javascript=
const sliceArray = my_array.slice(2);
console.log(sliceArray); // [3, 8, 6, 0]
```

![20106426bgxqWaEq8w](https://hackmd.io/_uploads/ByAmKwEjC.png)

```javascript=
const sliceNegativeArray = my_array.slice(-1);
console.log(sliceNegativeArray); // [0]
```

![20106426LTlhe7kiH2](https://hackmd.io/_uploads/rkSBtP4jC.png)

- splice(start, deleteCount, item1, item2, …)

```javascript=
// 假如只有 splice(start)，這時會跟 slice 行為一樣
const spliceArray1 = my_array.splice(3)
console.log(spliceArray1); // [8, 6, 0] 被移掉的值
console.log(my_array); // [5, 1, 3]，index 3 後面都移掉
 
//一樣可以接受負數
const spliceArray2 = my_array.splice(-1)
console.log(spliceArray2); // [0]
console.log(my_array); // [5, 1, 3, 8, 6] 倒數 1 個後面都移掉
 
// splice(start, deleteCount 抓幾個)
const spliceArray3 = my_array.splice(1, 3)
console.log(spliceArray3); // [1, 3, 8]
console.log(my_array); // [5, 6, 0]
// 從 index 1 開始抓 3 個 把中間值移掉
 
// splice(start, deleteCount 抓幾個, 插入 item)
const spliceArray4 = my_array.splice(1, 3, 'Hana', 'Mike')
console.log(spliceArray4); // [1, 3, 8]
// 不會有 'Hana', 'Mike' 字眼出現
 
console.log(my_array); // [5, "Hana", "Mike", 6, 0]
// 從 index 1 開始抓 3 個 把中間值移掉 並塞進 "Hana", "Mike"
```

- indexOf(searchElement)

```javascript=
const indexArray = my_array.indexOf(3) // 2
console.log(indexArray) // 2
console.log(my_array) // [5, 1, 3, 8, 6, 0]
 
const indexArray2 = my_array.indexOf(100)
console.log(indexArray) // -1
```
- join(separator)
```javascript=
const joinArray = my_array.join('-') // 2
console.log(joinArray) // '5-1-3-8-6-0'
console.log(my_array) // [5, 1, 3, 8, 6, 0]
 
const joinArray2 = my_array.join('') // 2
console.log(joinArray2) // '513860'
```
- includes(searchElement, fromIndex)
```javascript=
const includesArray = my_array.includes(3)
console.log(includesArray) // true
console.log(my_array) // [5, 1, 3, 8, 6, 0]
 
my_array.includes(5,3) // false 從 index 第三個之後找 5
```

# [集合 Set](https://ithelp.ithome.com.tw/articles/10214228)


## Union 聯集

![20106426BRaImSWOid](https://hackmd.io/_uploads/rJseG6KsA.jpg)

```javascript=
const union = (firstSet, otherSet) => {
    // store union, use es6 Spread syntax
    return new Set([...firstSet, ...otherSet]); 
}

// 範例一
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
union(a, b); // 1, 2, 3, 4, 5, 6

// 範例二
let c = new Set();
c.add(1);
c.add(2);
c.add(3);
let d = new Set([2, 3, 4, 5, 6])
union(c, d); // {1, 2, 3, 4, 5, 6}
```

## Intersection 交集

![20106426fd10yqtxzv](https://hackmd.io/_uploads/SkXMzptj0.jpg)

```javascript=
const intersection = (firstSet, otherSet) => {
    // store intersectionSet 
    let intersectionSet = new Set();
    firstSet.forEach(i => {
        if(otherSet.has(i) == true){
            intersectionSet.add(i)
        }
    })
    // get the same value
    return intersectionSet;   
}
// 範例
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
intersection(a, b); // {2, 3}
```

## Symmetric Difference 對稱差

![20106426evjcR40bkx](https://hackmd.io/_uploads/B10l7LTjA.jpg)

```javascript=
// 運用 union 跟 intersection 達成對稱差
const difference = (firstSet, otherSet) => {
    // store union
    let differenceSet = union(firstSet, otherSet);
    let intersectionSet = intersection(firstSet, otherSet);
    differenceSet.forEach(i => {
        if(intersectionSet.has(i) == true){
            differenceSet.delete(i)
        }
    })
    
    return differenceSet;   
}
// 範例
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
difference(a, b); // {1, 4, 5, 6}
```

## Subtraction 差集

![20106426c5XZZz0VMk](https://hackmd.io/_uploads/ryOvBjqiC.jpg)

```javascript=
const subtracting = (firstSet, otherSet) => {
    let subtractingSet = new Set([...firstSet]);
    otherSet.forEach(i => {
        if(subtractingSet.has(i) == true){
            subtractingSet.delete(i)
        }
    })
    return subtractingSet;
}

// 範例
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
console.log(subtracting(a, b)); // {1}
```

# [Map](https://ithelp.ithome.com.tw/articles/10214746)

![20106426AJgBlvLJre](https://hackmd.io/_uploads/SkHpeew20.jpg)

## 建立Map

key值可以是任何型態

```javascript=
// ES6 Map
let myMap= new Map();

var keyString = 'I am string',
    keyObj = {},
    keyFunc = function() {},
    keyNumber = 1

// 增加
myMap.set(keyString , 'string value');
myMap.set(keyObj, {obj: 1});
myMap.set(keyFunc , function(){console.log('I am function')});
myMap.set(keyNumber , 100);

// 有幾個
myMap.size; // 4

// 取值
myMap.get(keyObj); // {obj: 1}

// 看是否存在
myMap.has(keyString ); //  true

// 刪掉
myMap.delete(keyNumber); 
myMap.size; // 3

// 轉陣列
[...myMap.values()] // ["string value", {obj: 1}, ƒ]
```

也可以在宣告時，直接將值存入

```javascript=
let myMap = new Map([[keyString ,'string value'], [keyObj, {obj: 1}]]);
```

## Map vs. Array

![20106426d8zmONmzIv](https://hackmd.io/_uploads/B1H7Y7l6A.jpg)

Array 是儲存資料的箱子，而每一個箱子外面都會貼一個 index 標籤。假如你記得西瓜是放在 "0"，那就直接去標籤為 0 的箱子拿西瓜 Big O(1)。但如果忘記標籤是甚麼就要每一個箱子都打開檢查 Big O(n)

![201064264HaKUSVqog](https://hackmd.io/_uploads/S1kHFQga0.jpg)

而 map 像是貼有名字的標籤，一目了然連記都不用記，想拿西瓜，直接打開貼有西瓜標籤的箱子就好。

### 如果想知道每種水果被吃了幾個

#### Array

![20106426ysjA57nCV2](https://hackmd.io/_uploads/Hy2cFQl60.jpg)

```javascript=
// array 需要兩個陣列來記錄
fruitsArr = ['watermelon', 'grape', 'avocado']  // store friut
ateCount = [0 , 1, 4]  // store how many times eat
// 沒有人吃西瓜、葡萄被吃了一個、酪梨被吃 4 個
```

有 n 個水果，我們要先找 target 水果在不在 fruitsArr 裡，如果有，就在 ateCount 找到相對應 index 然後 +1， 這樣找下來有兩層 loop 時間複雜度是 Big $O(n²)$

#### Map

![20106426FnvGpk3RGJ](https://hackmd.io/_uploads/SkGy9QeaR.jpg)

```javascript=
let fruitsMap = new Map([['watermelon',0], ['grape', 1], ['avocado', 4]]);
```

有 n 個水果，我們要先找 target 水果在不在 fruitsMap 的 Key 裡，有就直接對的 value +1，時間複雜度是 Big O(n)，效率比 Array 好很多

# [Map vs. Object](https://ithelp.ithome.com.tw/articles/10214880)

object 有下列幾種方法:

```javascript=
// 1 literal
// 最常見到也是最推薦的
let objLiteral = {
	id: 1,
	name: 'Hannah'
}

// 2 by constructor
// 比較不建議因為效能較差
let objConstructor = new Object()
objConstructor['id'] = 1;


// 3 using Object.prototype.create
// 通常用在繼承別人的 prototype 
let objCreate = Object.create(null);
Object.defineProperty(objCreate, 'id', {
	value: 1
})
```

Map 只有一種

```javascript=
//Empty Map
let map1 = new Map()

// have value when define
let map = new Map([['id',1], ['name','Hannah']]);
```

內建方法:

![20106426NVpIBiLxWQ](https://hackmd.io/_uploads/SyBznQxaA.png)





