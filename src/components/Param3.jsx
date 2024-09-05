import React,{ uesState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Param3 = () => {
     
    const [param3] = useSearchParams();


    const search = [...param3];


    return (
        <div className='param3 comp'>
            <div>Param3.jsx 영역</div>
            {
                search.map(s=>(
                    <h3>{s[0]} : {s[1]}</h3>
                ))
            }
        </div>
    );
};

export default Param3;