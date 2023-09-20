import React from 'react';
import {useLoaderData} from "react-router-dom"

const Meals = () => {


    const data = useLoaderData()
    const meals = data.categories
    return (
        <div>
            <h2>Total Meals: {meals.length}</h2>
        </div>
    );
};

export default Meals;