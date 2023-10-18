// test7.js
// 정규식 연습
'use strict';

function regexCheck() {
    // 정규표현식변수를 먼저 만든 후에 수행함
    const regex1 = /atom/g;     // 전체중(g) - 'atom'이라는 문자열이 포함되어 있을시(true), 없을시(false) 반환
    const regex2 = /kbs|mbc|sbs|cjb/g;   // 전체중(g) - | : 또는(or) , 있을시(true), 없을시(false)  
    const regex3 = /홍길(동|순)/g; // 전체중(g) - 홍길동 or 홍길순 포함여부 
    const regex4 = /[a-z]/g; // 영문 소문자 포함여부
    // const regex5 = /[^a-z]/gm; // 여러줄전체(gm) - 영문 소문자만 포함여부
    const regex5 = /[^a-z]/g; // 전체(g) - 영문 소문자만 포함여부
    const regex6 = /[A-Z]/g; // 전체(g) - 영문 대문자 포함여부
    const regex7 = /[^A-Z]/g; // 전체(g) - 영문 대문자만 포함여부
    const regex8 = /[0-9]/g; // 전체(g) - 숫자 포함여부
    const regex9 = /[^0-9]/g; // 전체(g) - 숫자만 포함여부
    const regex10 = /[가-힣]/g; // 전체(g) - 한글 포함여부
    const regex11 = /[^가-힣]/g; // 전체(g) - 한글만 포함여부
    const regex12 = /[a-zA-Z0-9]/g; // 전체(g) - 영문자나 숫자 포함여부
    const regex13 = /[^a-zA-Z0-9]/g; // 전체(g) - 영문자와 숫자만 포함여부
    const regex14 = /[^a-zA-Z0-9_]/g; // 전체(g) - 영문자나 숫자나 밑줄만 포함여부

    const regex21 = /\./g; // 전체(g) - '.' 포함 여부
    const regex22 = /\d/g; // 전체(g) - 숫자 포함
    const regex23 = /\D/g; // 전체(g) - 숫자만 포함
    const regex24 = /\w/g; // 전체(g) - 영문자,숫자,_ 포함
    const regex25 = /\W/g; // 전체(g) - 영문자,숫자,_만 포함
    const regex26 = /\s/g; // 전체(g) - 공백(탭) 포함

    const regex31 = /홍길뭐?/g; // 전체(g) - ?앞의 글자가 0개나 1개 포함 유무
    const regex32 = /홍길뭐+/g; // 전체(g) - +앞의 글자가 1개이상 포함 유무
    const regex33 = /홍길뭐*/g; // 전체(g) - *앞의 글자가 0개이상 포함 유무

    let content = document.getElementById("content").value.trim();

    if(content == "") alert("문자열을 입력해주세요");
    // else if(!content.match(regex1)) alert("atom문자열 포함X");
    // else if(!content.match(regex2)) alert("kbs,mbc,sbs,cjb 중 한개도 포함X");
    // else if(!content.match(regex3)) alert("홍길동 or 홍길순 포함X");
    // else if(!regex4.test(content)) alert("영문(소문자) 포함X");
    // else if(regex5.test(content)) alert("영문(소문자)만 있지X");
    // else if(!regex6.test(content)) alert("영문(대문자) 포함X");
    // else if(regex7.test(content)) alert("영문(대문자)만 있지X");
    // else if(!regex8.test(content)) alert("숫자 포함X");
    // else if(regex9.test(content)) alert("숫자만 있지X");
    // else if(!regex10.test(content)) alert("한글 포함X");
    // else if(regex11.test(content)) alert("한글만 있지X");
    // else if(!regex12.test(content)) alert("영문나 숫자를 포함X");
    // else if(regex13.test(content)) alert("영문와 숫자만 있지X");
    // else if(regex14.test(content)) alert("영문나 숫자나 밑줄 포함X");
    // else if(!regex21.test(content)) alert("점 포함X");
    // else if(!regex22.test(content)) alert("숫자 포함X");
    // else if(regex23.test(content)) alert("숫자만 포함X");
    // else if(!regex24.test(content)) alert("영문이나 숫자나 _을 포함X");
    // else if(regex25.test(content)) alert("영문 숫자 _만 있지X");
    // else if(regex26.test(content)) alert("공백(탭) 포함");
    // else if(!regex26.test(content)) alert("공백(탭) 포함X");
    // else if(regex31.test(content)) alert("홍길 포함O");
    // else if(regex32.test(content)) alert("홍길뭐 포함O");
    else if(regex33.test(content)) alert("홍길뭐 또는 홍길 포함O");


    else alert("통과")
}