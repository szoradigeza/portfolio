import { Component } from "react";
import React from "react";
import "./navigation-bar.css";
interface Props {
    handleScrollToSection : Function;
    activeMenuItem: number;
}
export class NavigationBar extends Component<Props>{
    constructor(props: Props){
        super(props)}

    
    render(){  
        const activeItem = this.props.activeMenuItem
            return(
        <nav className="nav">
            <ul className="ul">
            <li className={activeItem === 1 ? "li-active" : ''} 
                onClick={() =>  this.props.handleScrollToSection(1)}>
                <span>Introduction</span>
            </li>
            <li className={activeItem === 2 ? "li-active" : ''}  
                onClick={() =>  this.props.handleScrollToSection(2)}>
                <span>About</span></li>
            <li className={activeItem === 3 ? "li-active" : ''}  
                onClick={() =>  this.props.handleScrollToSection(3)}>
                <span>Projects</span></li>
            </ul>
         </nav>
                )
    }
}