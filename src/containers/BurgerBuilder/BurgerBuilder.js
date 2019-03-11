import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.2,
    bacon: 1.5
};

class BurgerBuilder extends Component{

    state ={
        ingrediants: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 5,
        purchaseable: false,
        purchaseNow: false
    };

    updatePurchaseState = (ingrediants) => {
        const sum = Object.values(ingrediants).reduce((sum, el) => sum + el, 0);
        this.setState({purchaseable: sum>0});
    }
    addIngredientHandler = (type) =>{
        const currentCount = this.state.ingrediants[type];
        const newCount = currentCount+1;
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice + PRICES[type];
        let currentIngrediants = {...this.state.ingrediants};
        currentIngrediants[type] = newCount;
        this.setState({totalPrice: newPrice, ingrediants: currentIngrediants});
        this.updatePurchaseState(currentIngrediants);
    }

    removeIngredientHandler = (type) =>{
        const currentCount = this.state.ingrediants[type];
        if(currentCount === 0)
            return;

        const newCount = currentCount-1;
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice > PRICES[type] ? currentPrice - PRICES[type]: 0;
        let currentIngrediants = {...this.state.ingrediants};
        currentIngrediants[type] = newCount;
        this.setState({totalPrice: newPrice, ingrediants: currentIngrediants});
        this.updatePurchaseState(currentIngrediants)
    }

    onOrderNow = () => {
        this.setState({purchaseNow:true})
    }
    onOrderCancel = () => {
        this.setState({purchaseNow:false})
    }
    onPurchaseHandler = () => {
        alert('Thanks for your order!')
    }
    render(){

        const ingrediantsObj = {...this.state.ingrediants};
        let buttonDisabledInfo = {};
        for( let key in ingrediantsObj){
            buttonDisabledInfo[key] = ingrediantsObj[key] === 0;
        }
        return ( 
        <Aux>
            <Modal show={this.state.purchaseNow} click = {this.onOrderCancel}>
                <OrderSummary 
                ingrediants = {this.state.ingrediants}
                onPurchase = {this.onPurchaseHandler}
                onCancel = {this.onOrderCancel}
                totalPrice = {this.state.totalPrice}
                />
            </Modal>
            <Burger ingrediants = {this.state.ingrediants}/>
            <BuildControls 
                added = {this.addIngredientHandler} 
                removed = {this.removeIngredientHandler}
                disabledInfo = {buttonDisabledInfo}
                price = {this.state.totalPrice}
                purchaseable = {this.state.purchaseable}
                orderNow = {this.onOrderNow}
                />
        </Aux>
        
        )}
}

export default BurgerBuilder;