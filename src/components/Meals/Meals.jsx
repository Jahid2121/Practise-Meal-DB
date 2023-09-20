import React from 'react';
import {useLoaderData} from "react-router-dom"
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {


    const data = useLoaderData()
    const meals = data.categories.filter((category) => category.idCategory !== "7");
    console.log(meals);
    return (
        <div>
           <h2>Total Meals: {meals.length}</h2>
           <div  className='users'>
            {
                meals.map(meal => <Meal key={meal} meal={meal}></Meal>)
            }
           </div>
        </div>
    );
};

export default Meals;