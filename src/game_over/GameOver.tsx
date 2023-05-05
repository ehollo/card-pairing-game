import * as React from "react";
import GameOverDialog from "./dialog/GameOverDialog";
import Modal from "../UI/Modal";
import classes from "./GameOver.module.css";

type GameOverProps = {
  isGameOver: boolean;
};
const GameOver = ({ isGameOver }: GameOverProps) => {
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);

  const showGameOverDialog = () => {
    if (isGameOver) {
      setTimeout(() => setIsDialogVisible(true), 2000);
    } else {
      setIsDialogVisible(false);
    }
  };

  React.useEffect(showGameOverDialog, [isGameOver]);

  if (!isGameOver) return null;

  return isDialogVisible ? (
    <GameOverDialog />
  ) : (
    <Modal>
      <img
        src="./assets/fireworks.gif"
        alt="At success firework is displayed"
        className={classes.firework}
      />
    </Modal>
  );
};

export default GameOver;
