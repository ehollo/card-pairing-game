import * as React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: JSX.Element;
  type: "button" | "submit" | "reset";
  onClick(): void;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
