import React from "react";

class Clock extends React.Component {

    constructor() {
        super();
        const date = new Date();
        this.state = {date: date};
        this.tick = this.tick.bind(this);
        // debugger
    }

    tick() {
        const newDate = new Date();
        this.setState({date: newDate});
    }
    componentDidMount() {
        this.int = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.int);
    }

    render() {
        return (
            <div className = "clock-index">
                <h1>Real Time Clock</h1>   
                <div className = "clock-time">
                    Date: {(this.state.date).getMonth()} / {(this.state.date).getDate()} / {(this.state.date).getFullYear()}
                    <br/>
                    Time: {(this.state.date).getHours()} : {(this.state.date).getMinutes()} : {(this.state.date).getSeconds()}
                </div>
            </div>
        )
    }
}

export default Clock;