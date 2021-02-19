import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import newName from './App';
import Header from './header';
// import reportWebVitals from './reportWebVitals';


function MainContent() {
    return (<section>
                {newName}
            </section>)
}

function NavigMenu(){
    return (
        <section className="navbar">
            <Header text="Home"/>
        </section>
    )
}
ReactDOM.render(<NavigMenu />, document.getElementById("root"))
ReactDOM.render(<MainContent />, document.getElementById("root2"))

// reportWebVitals();