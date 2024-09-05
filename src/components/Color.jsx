import React, {useState} from 'react';

const Color = () => {

    // input 값으로 색을 입력하면 해당 색으로 변경하는 useState 생성
    const [inputColor, setInputColor] = useState("");
    const [color, setColor] = useState("");

    // 색을 text로 입력하여 글자에 색상이 변경하는 경우
    // const textInput = (e)=> {
    //     setInputColor(e.target.value);
    // }

    // const colorBtn = () =>{
    //     setColor(inputColor);
    // }

    return (
        <div className='color'>
            <h3 style={{color: color}}>Color Change Example</h3>
            <input type="color" onChange={(e)=>{setInputColor(e.target.value)}}/>
            <button onClick={()=>{setColor(inputColor)}}>set</button>
            {/* <input type="text" onChange={textInput}/> */}
            {/* <button onClick={colorBtn}>set</button> */}
        </div>    
    );
};

export default Color;