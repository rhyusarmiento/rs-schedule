import React, { Component } from 'react';

//import Icon from "./icon";

class Action extends Component {
    
    handleAction = function() {
        if (this.props.enrolled === false) {
            this.props.onClick()
        } else if (this.props.type) {
            this.props.onClick()
        }
    }.bind(this);
    
    render() {
        this.id = `action ${this.props.id}`

        return (
            // eslint-disable-next-line
            <a 
                id={this.id}
                onClick={() => this.handleAction()} 
                className={`${this.props.className} action`}>
            </a>
        )
    }
}

export default Action;