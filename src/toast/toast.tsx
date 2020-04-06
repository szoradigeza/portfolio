import { Component } from "react";
import React from "react";
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { red } from "@material-ui/core/colors";
import "./toast.css";
interface Props{

}
interface State {
    show?: boolean;
}

export class ToastComponent extends Component<Props, State>{
    constructor(props: any){
        super(props);
        this.state = { show: true };
    }
    handleSkillClick = (skill: any) => {
    }
    setShow = (value: boolean) => {
        this.setState({show: value})
    }
    render(){
            return(
                <div>
                    <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '100px',
  }}
></div>
                    <Toast onClose={() => this.setShow(false)} show={this.state.show} delay={10000} autohide
                         style={{
                            position: 'absolute',
                            top: 5,
                            right: 10,
                          }}
                    >
                        <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong id="toast-title" className="mr-auto">Resume</strong>
                        </Toast.Header>
                        <Toast.Body id="toast-body">If you would like to see my resume press "p" button.</Toast.Body>
                    </Toast>
                  </div>
                )
    }
}