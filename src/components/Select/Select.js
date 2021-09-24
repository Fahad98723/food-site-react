import React from 'react';
import './Select.css'
const Select = (props) => {
    console.log(props.select);
    return (
        <div >
            <h2>Selected Food Items</h2>
            <h1 className='select-name'> * {props.select.strMeal}</h1>
        </div>
    );
};

export default Select;