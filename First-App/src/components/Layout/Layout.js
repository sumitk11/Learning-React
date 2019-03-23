import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showDrawer: true
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showDrawer: false});
    }

    sideDrawerToggleHandler = () =>{
        this.setState( (prevState) => {
            return {showDrawer: !prevState.showDrawer}
        })
    }

    render(){
        return (
        <Aux>
                <Toolbar toggleSideDrawer = {this.sideDrawerToggleHandler}/>
                <SideDrawer open = {this.state.showDrawer} closeDrawer = {this.sideDrawerClosedHandler}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
        </Aux>)
    }
}

export default Layout;