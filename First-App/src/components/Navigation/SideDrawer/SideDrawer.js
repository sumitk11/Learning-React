import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {

    let appliedClasses = [classes.SideDrawer, classes.Close]
    if (props.open){
        appliedClasses = [classes.SideDrawer, classes.Open]
    }
    return (

        <Aux>
        <Backdrop show = {props.open} click={props.closeDrawer}/>
        <div className = {appliedClasses.join(' ')}>
            <div className = {classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;