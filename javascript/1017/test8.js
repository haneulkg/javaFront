// test8.js
// 배열처리에 대한 사용예
'use strict';

let arr1 = [
    '문자자료',
    5,
    [2,4,6,8],
    {tel : '010-1234-5678'},
    function() {console.log('안녕하세요');} //배열안에서는 익명만 사용가능
];
console.log("arr1 : ", arr1);
console.log("1 : ", arr1[2]);
console.log("2 : ", arr1[4]);
console.log("-------------");

let arr2 = new Array();
arr2[0] = '감자',
arr2[1] = 15,
arr2[2] = [1,3,5,7],
arr2[3] = {name : '홍길동'},
arr2[4] = function(){console.log("반가워요");};
console.log("arr2 : ", arr2);

arr2.push(25);
console.log("arr2 : ", arr2);
console.clear();

let str1 = arr2.join('-');
console.log("str : ", str1);
console.log("-------------");

arr2.forEach(function(data, idx) {
    console.log(data, " : ", idx);
});

arr2.forEach((data, idx) => {
    console.log(data, " : ", idx);
});

arr2.forEach((data, idx) => console.log(data, " : ", idx));
console.log("-------------");

arr2.map((data, idx) => console.log(data, " : ", idx));
console.log("-------------");

// 수식으로 걸러내기 : filter
arr2.filter(function(data,idx) {console.log(data, " : ", idx);});
arr2.filter((data,idx) => console.log(data, " : ", idx));

let res1 = arr2.filter((data, idx) => idx % 2 == 0);
console.log(res1);

let res2 = arr2.filter((data,idx) => idx == 2)
                .map((data) => data);
console.log("res2 : ", res2);

const arr3 = [10,50,8,42,57,32,14];
console.log("arr3 : ", arr3);

// 정렬하기 : 문자형식으로 정렬(오름차순) - sort()
let res3 = arr3.sort();
console.log("res3 : ", res3);

// 정렬하기 : 문자형식으로 정렬(내림차순) - reverse()
let res4 = arr3.reverse();
console.log("res4 : ", res4);

console.log("arr3 : ", arr3);
arr3.forEach((data,idx) => console.log(data, " : ", idx));
// console.clear();

// 최대|최소값
let max = Math.max(10,50,8,42,57,32,14);
console.log("max : ", max);
let min = Math.min(10,50,8,42,57,32,14);
console.log("min : ", min);

let max2 = Math.max(...arr3);   // ... 요소임을 알려줌
console.log("max2 : ", max2);
let min2 = Math.min(...arr3);
console.log("min2 : ", min2);