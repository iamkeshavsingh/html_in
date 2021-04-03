var label = ['Maths', 'Phy', 'Chem', 'Bio', 'His', 'Geo', 'Eng'];

var len = label.length;

// find - Completed
// findIndex - Completed
// map - Completed
// filter - Completed
// reduce - Completed
// slice - Completed
// push - Completed
// pop - Completed
// forEach - Completed
// fill - Completed
// indexOf - Completed
// reverse - Completed
// sort - Completed
// includes - Completed

// var value = 90;
// var flag = false;
// for (var i = 0; i < len; i++) {
//     if (arr[i] == value) {
//         flag = true;
//         console.log('Value is present');
//     }
// }

// if (flag == false) {
//     console.log('Value is not present');
// }


var arr = [78, 55, 90, 56, 43, 67, 65];
var marksLength = arr.length;

// ---------- find, findIndex -------------

// var val = 90;
// var value = arr.find(function (value) {
//     return value == val;
// });

// if (value) {
//     console.log('value is present');
// }
// else {
//     console.log('Value is not present');
// }


// ----------- map -------------

// var ans = [];
// for (var i = 0; i < marksLength; i++) {
//     var updatedValue = arr[i] + 5;
//     ans.push(updatedValue);
// }

// console.log(ans);

// var ans = arr.map(value => value + 5);

// console.log(ans);


// ---------- filter -----------


// var ans = [];
// for (var i = 0; i < marksLength; i++) {
//     if (arr[i] >= 60) {
//         ans.push(arr[i]);
//     }
// }

// console.log(ans);

// var ans = arr.filter(value => value >= 60);

// console.log(ans);


// ---------- reduce -----------

// var sum = 0;
// for (var i = 0; i < marksLength; i++) {
//     sum = sum + arr[i];
// }

// console.log(sum);

// var sum = arr.reduce((acc, value) => acc + value);
// console.log(sum);

// -------- slice ---------

// var subArray = arr.slice(1, 5);

// console.log(subArray);


// arr.forEach(function (value) {
//     console.log(value);
// });

// var arr1 = new Array(5).fill(-1);

// console.log(arr1);


// console.log(arr.indexOf(99));

// console.log(arr.includes(99));


// Implement find using reduce

// var value = 99;

// var ans = arr.reduce(function (acc, val) {

//     if (acc) return acc;
//     if (value == val) return val;
//     return acc;

// }, undefined);

// console.log(ans);