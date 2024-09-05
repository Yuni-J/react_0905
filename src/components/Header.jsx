import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h4>Header 영역</h4>
            <Link to='/home'>Home</Link>
            <Link to='/comp1'>Comp1</Link>
            <Link to='/comp2'>Comp2</Link>
            <Link to='/comp3'>Comp3</Link>
        </div>
    );
};

export default Header;