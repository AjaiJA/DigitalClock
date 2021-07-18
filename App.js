import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import "./style.css";

function App()
{
    return(
        <div className="App">
            <Clock />
        </div>
    );
}

export default App;