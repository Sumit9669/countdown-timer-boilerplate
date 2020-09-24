import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(){
        super();
        this.state={
            second:0,
        }
    };

    onSetCountdownTime=(e)=>{
        console.log("here", e);
        this.setState({
            second:e,
        });
    };
    render() {
         let {second}=this.state;
        return (
            <div>
                <Clock value={second} />
                <CountdownForm onSetCountdownTime={this.onSetCountdownTime}/>
            </div>
        );
    }
}

export default Countdown;