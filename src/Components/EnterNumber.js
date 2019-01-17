import React, {Component} from 'react';

class EnterNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberToChange: '',
        }
    }

    manipulateNumber = (event) => {
        event.preventDefault();
        // console.log('in manNum', this.state);
        const number = {
            numberToChange: this.state.numberToChange
        }
        console.log('in manNum', number);
        this.props.addCurrentTotal(number);
    }

    plusChange = (event) => {
        this.setState({
            numberToChange: this.state.numberToChange,
        });
        console.log('in plusC', this.state);
        
    }

    minusChange = (event) => {
        this.setState({
            numberToChange: (0 - (this.state.numberToChange)),
        });
    }

    onNumberChange = (event) => {
        this.setState({
            numberToChange: event.target.value,
        });
    }


    render (){
        console.log(this.state);
        
        return (
            <form onSubmit={this.manipulateNumber}>
                <button onClick={this.plusChange} type="submit">Up</button>
                <input onChange={this.onNumberChange} placeholder="Enter Number" />
                <button onClick={this.minusChange} type="submit">Down</button>
            </form>
        )
    }
}
export default EnterNumber;