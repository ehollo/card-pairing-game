import * as React from "react";
import classes from "./Footer.module.css";
import CardContext from "../context/CardContext";
import useHandleRestartGame from "../utils/useHandleRestartGame";
import Button from "../UI/Button";

type FooterProps = {
  isCheckMarkVisible: boolean;
};

const Footer = ({ isCheckMarkVisible }: FooterProps) => {
  const { clickNum } = React.useContext(CardContext);
  const { restart } = useHandleRestartGame();

  return (
    <div className={classes.footer}>
      <div></div>
      <div className={classes.result}>
        <p className={classes.score}>Your points: {clickNum}</p>
        <Button type="submit" onClick={restart}>
          <>Reload</>
        </Button>
      </div>
      <div className={classes["check-mark"]}>
        {isCheckMarkVisible && (
          <img className={classes.check} src="./assets/checkMark.gif" />
        )}
      </div>
    </div>
  );
};

export default Footer;
