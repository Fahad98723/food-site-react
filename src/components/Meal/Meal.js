import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'
const Meal = (props) => {
    console.log(props);
    const {strMeal,strMealThumb,strInstructions} = props.meal
    const {selectHandle} = props 
    const element = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className="details">
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0,150)}</p>
            <button onClick = {()=>selectHandle(props.meal)} className='select'> {element}  Select</button>
            </div>
        </div>
    );
};

export default Meal;