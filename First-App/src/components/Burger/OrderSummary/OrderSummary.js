import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingrediantsList = Object.keys(props.ingrediants).map(igkey => {
        return( 
        <li key={igkey}>
            <p><span style = {{textTransform: "capitalize"}}>{igkey}</span>: {props.ingrediants[igkey]}</p>
        </li>)
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your Buger contains the following items:</p>
            <ul>
                {ingrediantsList}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType='Success' click = {props.onPurchase}>Continue</Button>
            <Button buttonType='Danger' click = {props.onCancel}>Cancel</Button>
        </Aux>
    );
};

export default orderSummary;