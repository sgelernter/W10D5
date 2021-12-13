import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from './tabs';


const Root = (props) => {
    return (
    <div>
        <Clock />
        <Tabs array = {props.tabsArray}/>
    </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('main');
    const tabsArray = [{title :'title1', content: 'content1'},{title :'title2', content: 'content2'}, {title :'title3', content: 'content3'}, {title :'title4', content: 'content4'}];
    ReactDOM.render(<Root tabsArray={tabsArray} />, main);
})