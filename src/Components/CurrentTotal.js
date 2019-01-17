import React, { Component } from 'react';

class CurrentTotal extends Component {
   
    render(){
        return (
            <div>
                <h1>{this.props.numberToAppend}</h1>
            </div>
        )
    }
}

export default CurrentTotal;