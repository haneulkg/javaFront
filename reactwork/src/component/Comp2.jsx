import React, { useState } from 'react';

// Hooks : 값(변경가능한 값들)을 넣어주기 위한 문법 : const [변수명, 함수명] = useState(초기값);
// 함수명은 변수명의 setter함수 : setXxx

let param1Sw = 0;

const Comp2 = () => {

    const [param1 , setParam1] = useState("초기값");
    
    const myFunc = () => {
    if(param1Sw === 0) {
            setParam1("안녕하세요");
            param1Sw = 1;
        }
        else {
            setParam1("초기값");
            param1Sw = 0;
        }
    };

    const [count, setCount] = useState(100);
    
    // count 값을 1씩 증가하는 함수
    const onIncrease = () => {
        setCount(count + 1);
    };

    // count 값을 1씩 감소하는 함수
    const onDecrease = () => {
        setCount(count - 1);
    };

    // text상자의 내용 변경할 경우 값을 바꿔주는 state
    const [param2, setParam2] = useState();
    const [paramV, setparamV] = useState();

    // 텍스트박스의 값 변경시 param2변수의 값을 변경시켜 화면에 출력해주는 함수
    const textInput = (e) => {
        // console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);

        // setParam2(e.target.value);
        // const { name, value } = e.target;   // 구조분해(구조분할)
        const { name, value } = e.target;   // 구조분해(구조분할)

        setparamV(name);
        setParam2(value);
    };

    // 버튼 누를시 색 변경시켜주는 state 만들기
    const [textColor, setTextColor] = useState('purple');

    return (
        <div className='comp2'>
            <h3>이곳은 'Comp2' 입니다</h3>
            <hr />
            <div>
            {param1} &nbsp;&nbsp;
            <button onClick={myFunc}>버튼</button>
            </div>
            <hr />
            <div>count : {count}</div>
            <div>
                <button onClick={onIncrease}>증가</button>&nbsp;&nbsp;&nbsp;
                <button onClick={onDecrease}>감소</button>
            </div>
            <br />
            <hr />
            <div>입력변수 : {paramV}</div>
            <div>입력값 : {param2}</div>
            <input type="text" name='param2' onChange={textInput} />
            <hr />

            {/* CSS 적용하기 */}
            <p style={{backgroundColor:'beige', fontSize:'15pt', fontWeight:'bold', color:textColor}}>안녕하세요(글자색 바꾸기)</p>
            <div>
                <button onClick={() => setTextColor('blue')}>파란색</button>
                <button onClick={() => setTextColor('orange')}>주황색</button>
                <button onClick={() => setTextColor('purple')}>보라색</button>
            </div>
        </div>
    );
};

export default Comp2;