import React from 'react';
import './Meal.css'
const Meal = ({meal}) => {
    const {strCategory, strCategoryThumb,strCategoryDescription

    } = meal
    return (
        <div>
            <main>
            <img src={strCategoryThumb
} alt="" />

            <p>{strCategory}</p>
            <p>{strCategoryDescription
}</p>
            </main>
        </div>
    );
};

export default Meal;