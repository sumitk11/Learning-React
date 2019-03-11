import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {

    return (
        <div className = {classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(c => {
            return <BuildControl 
            key = {c.label} 
            label = {c.label} 
            added ={() => props.added(c.type)}
            removed ={() => props.removed(c.type)}
            disabledInfo = {props.disabledInfo[c.type]}
            />
        })}
        <button className = {classes.OrderButton} disabled = {!props.purchaseable} onClick = {props.orderNow}> ORDER NOW</button>
        </div>
    );
};

export default buildControls;