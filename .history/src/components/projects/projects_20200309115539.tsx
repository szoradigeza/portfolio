import { Component } from "react";
import React from "react";
import "./projects.css"
import {skills} from './skills';

interface Props{

}
interface State {
    videoURL?: string;
}

export class Projects extends Component<Props, State>{
    constructor(props: any){
        super(props);
        this.state = {
            videoURL: undefined
        }
    }
    handleSkillClick = (skill: any) => {
        this.setState({videoURL: skill.videoURL})
        console.log(skill.videoURL);
    }
    render(){  
        const videoURL = this.state.videoURL;
            return(
                <div>
                    <div className="wrapper">
                    {skills.map(skill => {
                       return <div key={skill.name} onClick={() => this.handleSkillClick(skill)}>
                                <span>{skill.name}</span>
                                <img src={skill.logo} alt="Logo" className="skill-logo-img" />
                            </div>
                        })}
                    </div>
                    <div className="no-data-container">
                        <p className="no-data-text">Sorry, no data available.</p>
                    </div>
                        </div>
                )
    }
}