import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => <div className={classes.backdrop} />

const ModalOverlay = props => (
 <div className={classes.modal}>
   <div className={classes.content}>
     {props.children}
    </div>
  </div>);

const Modal = (props) => {

  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;