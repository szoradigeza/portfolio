import { Component } from "react";
import React from "react";
import "./nav-bar.css";
export class NavBar extends Component{
    render(){
        return(
        <div className="sticky-nav">
    <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
        <ul>
            <li><span>Introduction</span></li>
            <li><span>About</span></li>
            <li><span>Projects</span></li>
        </ul>
    </nav>
</div>)
    }
}