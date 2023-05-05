import * as React from "react";
import Modal from "./Modal";
import classes from "./Dialog.module.css";

type DialogProps = {
  children: JSX.Element | JSX.Element[];
  onClose(): void;
};

const Dialog = ({ children, onClose }: DialogProps) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.dialog}>{children}</div>
    </Modal>
  );
};

export default Dialog;
