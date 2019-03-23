import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Course extends Component {
    render () {
        const params = new URLSearchParams(this.props.location.search); 
        const name = params.get('name');   
        return (
            <div>
                <h1>{name}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);