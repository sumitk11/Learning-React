import React from 'react'
import classes from './Burger.css'
import BurgerIngrediant from './BurgerIngrediants/BurgerIngrediant'

const burger = ( props ) => {

    let transformedIngrediants = Object.keys(props.ingrediants).map( ig => {

        return [...Array(props.ingrediants[ig])].map( (_, i) =>{
            return <BurgerIngrediant key = {ig+i} type = {ig}/>
        });

    }).reduce( (arr, el) => {
        return arr.concat(el);
    }, []);

    if( transformedIngrediants.length < 1){
        transformedIngrediants = <p>please start adding ingrediants</p>
    }
    return (
        <div className = {classes.Burger}>
            <BurgerIngrediant type = "bread-top"/>
            {transformedIngrediants}
            <BurgerIngrediant type = "bread-bottom"/>
        </div>
    );
};

export default burger;