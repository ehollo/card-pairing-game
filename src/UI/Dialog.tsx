import * as React from "react";
import * as ReactDOM from "react-dom";
import classes from "./dialog.module.css";
import { Fragment } from "react";
import useHandleRestartGame from "../utils/useHandleRestartGame";

type DialogProps = {
  children: JSX.Element | JSX.Element[];
  // onClose(): void;
};

const dialogModal = document.getElementById("dialog");

const Dialog = ({ children }: DialogProps) => {
  const {restart} = useHandleRestartGame();

  const handleRestart = () => {
    console.log("in the restart")
    restart();
}

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} 
        onClick={handleRestart}></div>,
        dialogModal
      )}
      {ReactDOM.createPortal(
        <div className={classes.dialog}>
          <div className={classes.content}>{children}</div>
        </div>,
        dialogModal
      )}
    </Fragment>
  );
};

export default Dialog;
