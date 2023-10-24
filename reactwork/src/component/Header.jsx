import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">    {/* 컴포넌트 이름과 같아야함 (첫글자만 소문자로) */}
            {/* <h2>이곳은 'Header' 입니다</h2> */}
            {/* 
            <a href="http://www.naver.com">Naver</a>
            <a href="#">Comp1</a>
            <a href="#">Comp2</a>
            <a href="#">Comp3</a> 
            */}
            {/* react에서는 a태그 대신 "router"를 사용함, router에서는 href대신 "Link"태그를 사용함 */}
            <Link to="/">Home</Link>
            <Link to="/Comp1">Comp1</Link>
            <Link to="/Comp2">Comp2</Link>
            <Link to="/Comp3">Comp3</Link>
        </div>
    );
};

export default Header;