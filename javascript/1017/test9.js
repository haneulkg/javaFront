// test9.js
// 문자함수 연습
'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg';
let text2 = '     ABC    BCABC   GHI   JKLABCMN....... ABC... OPQ    ';

// length : 길이
// substring()   : 특정위치의 문자열 추출
// indexOf()     : 문자열 검색(index값 반환 : 없을시 -1)
// includes()    : 문자열 검색(true/false 반환) 
// concat()      : 문자열 결합
// slice()       : 지정된 인덱스 위치부터 문자열 가져오기
// trim()        : 문자열의 앞,뒤 공백 절삭 | <trimStart(), trimEnd()>
// replace()     : 일치하는 데이터중 첫번째 데이터만 바꿈
// replaceAll()  : 일치하는 데이터 모두 바꿈
// toUpperCase() : 모두 대문자로 바꿈 
// toLowerCase() : 모두 소문자로 바꿈
// charAt()      : 문자열 1개씩 추출
// charCodeAt    : 지정된 인덱스번지 영문자의 아스키 코드값을 출력
// split()       : 지정된 문자로 분리시킴 (분리된 자료는 배열로 저장 후 사용함)

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;

let str = "0123456789012345678901234567890<br/>"
str += text2 + '<hr/><br/>';

// str += text1.substring(5);
// str += text1.substring(5,10);
// str += text1.indexOf('abc');
// str += text1.slice(5);
// str += text1.slice(5,10);
// str += text1.substr(5, 10);  -- 인덱스 5번지에서 10개의 문자열을 가져온다
// str += text2.replace('ABC', 'ooppq');     -- 일치하는 데이터중 첫번째의 데이터만 바뀜
// str += text2.replaceAll('ABC', 'ooppq');  -- 일치하는 데이터 모두 바뀜
// str += text1.toUpperCase();
// str += text1.toLowerCase();
// str += text1.concat("안녕", text1);
// str += text2 + "안녕";
// str += text2.trim() + "안녕";
// str += "안녕1" + text2.trim() + "안녕2";
// str += "안녕1" + text2.trimStart() + "안녕2";
// str += "안녕1" + text2.trimEnd() + "안녕2";
// str += "안녕1" + text1.charCodeAt(0) + "안녕2";

// let temp = text2.split('ABC');
// str += "안녕1" + temp + "안녕2";
// for(let s of temp) {
    // str += s + '<br/>';
// }
// str += "길이 : " + temp.length;

let title= ['지역번호', '국번호', '전화번호'];
let telTemp = '010-1234-5678';

let tels = telTemp.split('-');

tels.forEach((data, idx) => console.log(data, " : ", idx));
tels.forEach((data, idx) => str += data +'<br/>');

demo.innerHTML = str;