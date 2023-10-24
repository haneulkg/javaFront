import { student, students } from "../data/data";
import Student from "./Student";

const Comp1 = () => {
    /*
    const student = {
        name : '홍길동',
        age : 25,
        address : '청주'
    };
    
    const students = [
        {
        name : '홍길동',
        age : 25,
        address : '청주'
        },
        {
        name : '김말숙',
        age : 30,
        address : '서울'
        },
        {
        name : '이기자',
        age : 10,
        address : '제주도'
        }
    ];
    */
    return (
        <div className="comp1">
            <h3>이곳은 'Comp1' 입니다</h3>
            <hr />
            {/* 1개의 값만 가져오기 */}
            <p>
                {student.name} : {student.age}세 : {student.address}
            </p>
            {/* 배열 : 여러개의 값을 가져오기 */}
        {/*             
            <span>
                {
                students.map( s => (
                    <span>{s.name} : {s.age}세 : {s.address}<br/> </span>
                ))
                }
            </span>
        */}
            <hr />
            {/* 1개 자료 출력 */}
            <Student stu={student}/>

            {/* 여러개 자료 출력 */}
            {students.map( s => (
                <div>{s.name} / {s.age} / {s.address}</div>
            ))}
        </div>
    );
};

export default Comp1;