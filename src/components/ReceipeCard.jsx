import React from "react";

const ReceipeCard=({receipe})=>{
    const{idMeal,strMeal,strCategory,strMealThumb}=receipe
    
    return(
        <div className="card">
            <img 
             
             src={strMealThumb}
             alt={strMeal}
             className="card-image"
            
            />
            <div className="card-body">

                <span className="category">{strCategory}</span>
                <h3>{idMeal}</h3>
                <a href={"http://www.themealdb.com/meal/" + idMeal} target="_blank">Ingrediants</a>
            </div>

        </div>
    )

}
export default ReceipeCard