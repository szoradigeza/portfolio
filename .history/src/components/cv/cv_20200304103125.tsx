import { Component } from "react";
import React from "react";
import "./cv.scss";
import avatar from "./avatar.jpg";
import about from "./icons/about.png";
import giticon from './icons/git-icon.png';
import homeIcon from './icons/home-icon.png';
import mailIcon from './icons/mail-icon.png'
import webIcon from './icons/web-icon.png';
import callIcon from './icons/call-icon.png';
import contactIcon from "./icons/contact-icon.png";
import skillIcon from "./icons/skill-icon.png";
import LinearProgress from '@material-ui/core/LinearProgress';
import { CvRightSide } from "./component/cv-right-side";
export class Cv extends Component{

    
    render() {
        return(
            
<div className="book">
    <div className="page">
        <div id="wrapper">
            <div className="first">
            <div className="img-decoration-line1"></div>
            <div className="img-decoration-line2"></div>
            <div className="photo">
                    <img src={avatar} className="avatar-img" alt="Avatar"></img>
                </div>
                
                <div id="line"></div>
                <div id="left-first-title">
                    <h5> <img id="icons" src={about} alt="about-icon"></img> About me</h5>
                </div>
                <div id="about-me">
                    <p>I'm a 24 years old enthusiastic developer. I am working currently in Continental corporation . Next to the Continental's project works I do home made projects and
 I love learning new things. I like building new stuff and working with other people.</p>
                </div>
                <div id="left-title">
                    <h5> <img id="icons" src={contactIcon} alt="contact-icon"></img> Contacts</h5>
                </div>
                <div id="contacts">
                    <div id="call">
                        <a id="contact-name"><img className="contact-icon" alt="contact-name" src={callIcon}></img>
                        </a>
                        <a id="contact-data">+36 20 219 6335</a>
                    </div>
                    <div id="mail">
                        <a id="contact-name"><img className="contact-icon" src={mailIcon} alt="contact-mail"></img>
                        </a>
                        <a id="contact-data">szoradigeza@gmail.com</a>
                    </div>
                    <div id="web">
                        <a id="contact-name"><img className="contact-icon" src={webIcon} alt="contact-web"></img>
                        </a>
                        <a href="https://szoradigeza.github.io/portfolio/" id="contact-link">szoradigeza.github.io/portfolio</a>
                    </div>
                    <div id="Git">
                        <a id="contact-name"><img className="contact-icon" src={giticon} alt="contact-git"></img>
                        </a>
                        <a href="https://github.com/szoradigeza/" id="contact-link">github.com/szoradigeza</a>
                    </div>
                    <div id="Home">
                        <a id="contact-name"><img className="contact-icon" src={homeIcon} alt="home-icon"></img>
                        </a>
                        <a id="contact-data">Veszprem, Hungary</a>
                    </div>
                </div>
                <div id="left-title">
                    <h5> <img id="icons" src={skillIcon}></img> Skills</h5>
                </div>
                <div id="skills">
                    <div className="skill-type">
                        <p>Front - end</p>
                    </div>
                    <ul>
                        <li className="skill-name">HTML</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                        <li className="skill-name">CSS/CSS3/SASS</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={70} />
                        </div>
                        <li className="skill-name">Angular</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={70} />
                        </div>
                        <li className="skill-name">React</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={50}/>
                        </div>
                    </ul>
                    <div className="skill-type">
                        <p>Back - end</p>
                    </div>
                    <ul>
                        <li className="skill-name">Typescript</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={80}/>
                        </div>
                        <li className="skill-name">NodeJS</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={60}/>
                        </div>
                        <li className="skill-name">Python</li>
                        <div id="progress-bar">
                            <LinearProgress variant="determinate" value={80}/>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="second">
                <div className="second-wrapper">
                    <CvRightSide />
                </div>
            </div>
        </div>
        <div className="decoration">
            <div></div>
        </div>
    </div>
</div>
        )
    }
}