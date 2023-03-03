import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonHome from './ButtonHome';
import ButtonWrite from './ButtonWrite';
 
function Footer() {
	// store 의 상태가 바뀔 때마다 상태를 받아온다.
    const uri = useSelector(state => state.uriReducer.inputData)
 
    return(
        <div>
            <hr />
            <nav>
                <ul>
                    <li><ButtonHome /></li>
                    {/* // 받아온 상태가 '/BoardNew' 가 아닐때만 버튼을 보여준다. */}
                    {uri !== '/BoardNew' ?
                        <li><ButtonWrite /></li> : 
                        <li></li>
                    }
                    <li><Link to={"/sample"}>sql test</Link></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Footer;