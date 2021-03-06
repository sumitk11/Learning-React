import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import _ from 'lodash';

class ContactData extends Component {
    state = {
        customForm:{
            name:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value: ''
            },
            email:{
                elementType: 'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value: ''            
            },
            street:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value: ''            
            },
            postalCode:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Zip Code'
                },
                value: ''            
            },
            country:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value: ''            
            },
            deliveryMethod:{
                elementType: 'select',
                elementConfig:{
                    options:[
                        {value: 'standard', displayValue: 'Standard'},
                        {value: 'premium', displayValue: 'Premium'},
                    ]
                },
                value:''
            } 
        },
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const orderDetails = {};
        _.forEach(this.state.customForm, (obj,key) => {
            orderDetails[key]=obj.value;
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderDetails
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    inputChangeHandler = (event,inputId) =>{
        const formCopy = {...this.state.customForm};
        const inputCopy = {...formCopy[inputId]};
        inputCopy.value = event.target.value;
        formCopy[inputId]=inputCopy;
        this.setState({
            customForm:formCopy
        });
    
    }

    render () {
        const formElements = [];
        for( let key in this.state.customForm){
            formElements.push({
                id: key,
                config: this.state.customForm[key]
            });
        }
        let form = (
            <form>
                {
                    formElements.map(element =>(
                        <Input 
                            inputtype = {element.config.elementType} 
                            elementConfig={element.config.elementConfig} 
                            key={element.id}
                            value={element.config.value}
                            changed={(event) => this.inputChangeHandler(event,element.id)}
                            />
                    ))
                }
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;