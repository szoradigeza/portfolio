import { Component } from "react";
import React from "react";
import './cv-right-side.css';
export class CvRightSide extends Component{

    
    render() {
        return(
            <div>
                <div className="name-container"> <p className="name"> Szórádi Géza </p>
                    <p className="web-developer">Web developer</p>
                 </div>
<div className="experience-container">
    <div className="second-title">
        <h5>Education</h5>
    </div>
    <div className="line"></div>
    <div className="first-experience">
        <div className="duration"> 2011 -
            <br></br>2016</div>
        <div className="education-name">
            <a>Network installer, Secondary Technical School of Informatic</a>
        </div>
    </div>
    <div className="education">
        <div className="duration"> 2016 -
            <br></br>
        </div>
        <div className="education-name">
            Bachelor of Computer Science, University of Pannonia
        </div>
    </div>
    <div className="line"></div>
    <div className="second-title">
        <h5>Experience</h5>
    </div>
    <div className="line"></div>
    <div className="first-experience">
        <div className="duration"> 2018 -
            <br></br>present</div>
        <div className="present-work-name">
            <a>Continental Automotive Hungary Kft.</a>
            <br></br>
        </div>
    </div>
    <div className="work-description">
        <a>//   In the beginning my main task was tool development which facilitates <br></br> 
            // Work for developer.
                        Currently i am working on project job.
                        </a>
    </div>
    <div className="experience">
        <div className="duration"> 2017 -
            <br></br> 2018</div>
        <div className="education-name">
            <a>Invitel Zrt. Call Center</a>
        </div>
    </div>
    <div className="experience" id="last-experience">
        <div className="duration"> 2015 -
            <br></br> 2016</div>
        <div className="education-name">
            <a>Cellcomp Kft.</a>
        </div>
    </div>
    <div className="line"></div>
    <div className="second-title">
        <h5>Projects</h5>
    </div>
    <div className="line"></div>
    <div>
        <div  className="first-project-name">
            <a>Application for job interview support</a>
        </div>
        <div className="project-description">
                <a>//  The application can randomly generate a test from a series of questions. <br></br>
                         //   The generated test can be printed or started on the application. <br></br>
                         //   Once the tests are completed, they will be automatically evaluated, <br></br> and the results are saved by the application for future reference. 
                        </a>
                <div className="programming-language">
                    <a>
                        <ul className="programming-ul">
                            <li>Angular</li>
                            <li>Python Flask</li>
                            <li>MySQL</li>
                        </ul>
                    </a>
                </div>
            </div>
            <div  className="project-name">
            <a>Sprint tracking tool</a>
        </div>
        <div className="project-description">
                <a>//   It's an application for supporting the sprint. <br></br></a>
                <a>   //   Evaluation of sprints (creating diagrams, charts and tables). <br></br> </a>
                 <a>  //   Watch TV funcion for share Sprint data on TV screen. </a>
                <div className="programming-language">
                    <a>
                        <ul className="programming-ul">
                            <li>Angular</li>
                            <li>Java spring</li>
                        </ul>
                    </a>
                </div>
            </div>
            <div  className="project-name">
            <a>My portfolio website</a>
        </div>
        <div className="project-description">
        <a>
        //   Introductory website about myself and about the projects.
        </a>
                <div className="programming-language">
                    <a>
                        <ul className="programming-ul">
                            <li>ReactJS</li>
                        </ul>
                    </a>
                </div>
            </div>
    </div>
<div>
    <div className="more-project-text">
    <a>More project information on my github page.</a>
    </div>
</div>
</div>
</div>

        )
    
    }
}