// test10.js
// 숫자함수 연습
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.16;
let su4 = -3.14;
let su5 = 31.5;

let num = 0;

num = Math.max(su1, su2, su3, su4, su5);
num = Math.min(su1, su2, su3, su4, su5);
num = Math.ceil(su3);
num = Math.ceil(su4);
num = Math.floor(su3);
num = Math.floor(su4);

num = Math.trunc(su3);
num = Math.trunc(su4);

num = Math.pow(2, 5);
num = Math.abs(su2);
num = Math.sqrt(16);

num = su3.toFixed(1);  // 매개변수로 지정된 소수이하 자리수까지 출력시켜줌 (반올림 처리함)
// num = su5.toFixed(0);

// num = Math.round(su3); 

num = Math.random();   // 난수 : 0 ~ 1사이의 실수형 난수발생
num = Math.random()*10;
num = parseInt(Math.random()*10);
num = parseInt(Math.random()*10)+1;
num = parseInt(Math.random()*(14-5+1))+5;     // 5~14까지의 난수

demo.innerHTML = num;