import { Component } from "react";
import React from "react";
import "./about.css";
export class About extends Component{
    
/* */


    render(){  
            return(
                <div className="about">
                    <div className="tags">
                        <code>HTML</code><br></br>
                        <code className="body-tag">body</code><br></br>
                        <code className="div-tag">div</code>
                    </div>
                    <div className="about-container">
                        <a>I'm a 24 years old enthusiastic <span className="developer-txt">developer </span> who live in Veszprém.<br></br>
                                I studied computer Science in University of Pannonia.<br></br>
                                I am working currently in <span className="continental-txt">Continental corporation </span>.
                                Next to the Continental's project works I do home made projects and<br></br> I love learning new things.
                                I like building new stuff and working with other people<br></br> – nothing really interesting is ever built alone!<br></br>
                                My main interests are:<br></br>
                                <ul>
                                    <li>Angular</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Software architecture</li>
                                    <li>Reactive Programming</li>
                                    <li>Learning new programming languages</li>
                                </ul>
                                Beside the programming I am interested in sports. I go to the gym 3-4 times a week.<br></br>
                        </a>
                    </div>
                    <div>
                        <div className="end-tags">
                    <code className="div-tag">/div</code><br></br>
                    <code className="body-tag">/body</code> <br></br>
                        <code>/HTML</code><br></br>
                        </div>
                    </div>
                </div>
                )
}
}