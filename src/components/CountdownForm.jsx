import React from 'react';

class CountdownForm extends React.Component {
     
    render() {
        let {onSetCountdownTime}= this.props;
        return (
            <div>

                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button success expanded" value="Start Countdown" onClick={()=>{
                        onSetCountdownTime(this.refs.seconds.value);
                    }}>Button</button>
           
            </div>
        );
    }
}

export default CountdownForm;