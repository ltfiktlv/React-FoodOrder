import React, { Fragment } from "react";
import ReactDOM, { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const indexHtmlDiv = document.getElementById("modal");
  return (
    <Fragment>
      {createPortal(<Backdrop onClick={props.onCloseBack}/>, indexHtmlDiv)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        indexHtmlDiv
      )}
    </Fragment>
  );
};

export default Modal;
