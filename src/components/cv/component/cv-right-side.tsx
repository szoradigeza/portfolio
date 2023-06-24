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
            <br></br>2016
        </div>
        <div className="education-name">
            <a>Network installer, Secondary Technical School of Informatic</a>
        </div>
    </div>
    <div className="education">
        <div className="duration"> 2016 -
            <br></br> 2020
        </div>
        <div className="education-name">
            Bachelor of Computer Science, University of Pannonia
        </div>
    </div>
    <div className="line"></div>
    <div className="second-title">
        <h5>Experiences</h5>
    </div>
    <div className="line"></div>
    <div className="first-experience">
        <div className="duration"> 2021 -
            <br></br>present</div>
        <div className="present-work-name">
            <a>Accenture - Frontend developer</a>
            <br></br>
        </div>
    </div>
    <div className="work-description">
        <a>// I've been working on a web application, where we designed every<br/>
          // little of the application together with the team.
                        </a>
    </div>
    <div className="experience">
        <div className="duration"> 2018  -
            <br></br>2021</div>
        <div className="present-work-name">
            <a>Continental Automotive Hungary Kft.</a>
            <br></br>
        </div>
    </div>
    <div className="work-description">
        <a>//   Embedded system developer and full stack dev. <br/>
          // I gained experience in C, React, Angular and Python flask.
                        </a>
    </div>
    <div className="line"></div>
    <div className="second-title">
        <h5>Projects</h5>
    </div>
    <div className="line"></div>
    <div>
                <div  className="project-name">
            <a>British Vodafone</a>
        </div>
        <div className="project-description">
        <a>
        //  The application follows microservice architecture style. <br/>
        //  Our team was responsible for developing the support part of the application <br/> and processing of company orders.<br/>
         //  We also contributed to the creation of the homepage.<br/>
        <p style={{color:"rgb(255,186,47)"}}>www.vbp.vodafone.co.uk/explore/business-details </p>
       

        </a>
                <div className="programming-language">
                    <a>
                        <ul className="programming-ul">
                            <li>ReactJS</li>
                            <li>Expess</li>
                           <li>AWS cloud services</li>
                        </ul>
                    </a>
                </div>
            </div>
        <div  className="first-project-name">
            <a>Application for supporting job interview</a>
        </div>
        <div className="project-description">
                <a>//  The application can randomly generate a test from a series of questions. <br></br>
                         //   The generated test can be printed or started on the web page. <br></br>
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
                <a>//   The aim of the application to supports the sprint. <br></br></a>
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
