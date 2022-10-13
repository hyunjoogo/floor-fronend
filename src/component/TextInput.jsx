import React from "react";
import "./input_text.css";

const TextInput = (props) => {
    return (
        <>
            <input className="input_text" {...props} placeholder="placeHolder"/>
            <br/>
            <br/>
            <button className="btnBlue">btnBlue 기능버튼</button>
            <br/>
            <br/>
            <button className="btnGray" disabled={true}>btnGray 비기능버튼</button>
            <br/>
            <br/>
            <button className="btnSearch ">btnSearch 검색버튼</button>
            <br/>
            <br/>
            <input type="radio"/>
            <label>On</label>
            <input type="radio"/>
            <label>Off</label>
            <br/>
            <br/>
            <select>
                <option value="1">전체</option>
                <option value="2">HTTP</option>
                <option value="3">REST</option>
                <option value="4">Data Base</option>
            </select>
            <br/>
            <br/>
            <select>
                <option value="" >선택</option>
                <option value="2">HTTP</option>
                <option value="3">REST</option>
                <option value="4">Data Base</option>
            </select>
        </>
    );
};

export default TextInput;

