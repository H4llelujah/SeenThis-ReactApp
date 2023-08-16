import React, { memo } from 'react';
import clasess from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input className={clasess.myInput} {...props}/>
    )
}

export default memo (MyInput);