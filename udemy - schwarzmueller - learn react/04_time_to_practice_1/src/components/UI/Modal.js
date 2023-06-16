import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './Modal.module.css';

const Modal = (props) => {

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          {props.onCancel && <Button onClick={props.onCancel}>Cancel</Button>}
          {props.onOk && <Button onClick={props.onOk}>OK</Button>}
        </footer>
      </Card>
    </div>
  );
};

export default Modal;