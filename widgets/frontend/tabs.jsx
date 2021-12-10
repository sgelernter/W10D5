import React from "react";

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.entries = props.array;
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <div>
                <ul>
                {this.entries.map((entry) => {
                    return(
                        <li>
                            <h1>
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