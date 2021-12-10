import React from "react";

class Clock extends React.Component {

    constructor() {
        super();
        this.state = new Date();
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState = new Date();

    }
    componentDidMount() {
        this.int = setInterval(tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.int);
    }

    render() {
        return (
            <div className = "clock-index">
                <h1>Real Time Clock</h1>
            </div>
        )
    }
}

export default Clock;