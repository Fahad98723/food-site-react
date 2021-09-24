import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Select from '../Select/Select';
import './Api.css'
const Api = () => {
    const [meals , setMeals] = useState([])
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    const [select ,setSelect] = useState([])
    const selectHandle = (meal) => {
        setSelect(meal)
    }
    return (
        <div className="meals-container">
                    <div className='meals-section'>
                        {
                            meals.map(meal => <Meal 
                                selectHandle = {selectHandle}
                                key = {meal.idMeal}
                                meal = {meal}></Meal>)
                        }
                    </div>
                    <div className="select-section">
                        <Select select={select}></Select>
                    </div>
        </div>
    );
};

export default Api;