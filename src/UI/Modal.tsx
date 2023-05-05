import * as React from "react";
import * as ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { Fragment } from "react";

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  onClose?(): void;
};

const dialogModal = document.getElementById("modal");

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={onClose}></div>,
        dialogModal
      )}
      {ReactDOM.createPortal(
        <div className={classes.container}>
          <div className={classes.content}>{children}</div>
        </div>,
        dialogModal
      )}
    </Fragment>
  );
};

export default Modal;
