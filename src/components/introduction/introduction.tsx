import { Component } from "react";
import React from "react";
import "./introduction.scss";

interface Props {
    scrollPosition?: any;
    onClick : Function
}
export class Introduction extends Component<Props>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div className="introduction-container" id="intro-container">
                <div className="introduction-text">
                    <p>Hello,<br></br> My name is <span>Géza Szórádi</span>. <br></br> I'm a full-stack web developer. </p>
                </div>
                <div className="btn-container">
                <button className="about-me" onClick={()=> this.props.onClick()}>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                    <span className="button-text">More about me</span>
                    </button>
                    </div>
            </div>
        )
    }
}