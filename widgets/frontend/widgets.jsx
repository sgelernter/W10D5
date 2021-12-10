import React from "react";
import ReactDOM from "react-dom";


const Root = () => {
    return (<div>This is a test</div>)
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Root />, main);
})