import React from 'react';

class DigitalClicker extends React.Component {
    state = { timesClicked: 0 };

    render() {
        const {timesClicked} = this.state;
        return (
            <button
                onClick={() => this.setState({ timesClicked: timesClicked + 1 })}
            >
                {this.state.timesClicked}
            </button>
        );
    }
}

export default DigitalClicker;