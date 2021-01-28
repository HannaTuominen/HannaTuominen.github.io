import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <div>
    <Backdrop show={props.show} clicked={props.closeModal}/>
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      onClick={props.closeModal}>
      {props.children}
    </div>
  </div>

);

export default modal;
