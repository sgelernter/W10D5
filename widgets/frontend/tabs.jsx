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

    updateIndex(idx){
        this.setState({index: idx});
    }

    render() {
        const activeEntry = this.entries[this.state.index];
        const header = this.entries.map((entry, idx) => {
                return(
                    <li key={idx} className='tab-list-item' >
                        <h2 onClick={() => this.updateIndex(idx)} >
                            {entry.title}
                        </h2>
                    </li>)
                })
        return (
            <div>
                <ul className='tabs-ul'>
                    <div className='tabs-header'>
                        {header}
                    </div>
                    <article> 
                        {activeEntry.content}
                    </article>
                </ul>
            </div>
        )
    }

}

export default Tabs;