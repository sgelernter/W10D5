import React from "react";

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.entries = props.array;
        this.state = {
            index: 0
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(){
        debugger
        this.setState({index: window.event.target.key});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <ul>
                {this.entries.map((entry, idx) => {
                    return(
                        <li key={idx} className='tab-list-item'>
                            <h1 onClick={this.updateIndex} key={idx}>
                                {entry.title}
                            </h1>
                            <article>
                                {entry.content}
                            </article>   
                        </li>)
                    })}
                </ul>
            </div>
        )
    }

}

export default Tabs;