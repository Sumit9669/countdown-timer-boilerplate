import React from "react";

class CountdownForm extends React.Component {
  onSubmit(e) {
    var secondsStr = this.refs.seconds.value;
    let added = parseInt(secondsStr);
    console.log(added);
    if (isNaN(added)) { 
      return;
    }
    if (secondsStr !== "" && added >= 0) {
      this.props.onSetCountdownTime(added);
    }

    this.refs.seconds.value = "";
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form
          ref="form"
          onSubmit={this.onSubmit.bind(this)}
          className="countdown-form"
        >
          <input
            type="text"
            ref="seconds"
            placeholder="Enter time in seconds"
          />
          <input
            type="submit"
            className="button success expanded"
            value="Start Countdown"
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
