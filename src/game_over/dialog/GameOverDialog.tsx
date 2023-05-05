import * as React from "react";
import useHandleRestartGame from "../../utils/useHandleRestartGame";
import Dialog from "../../UI/Dialog";
import UserScroresList from "./UserScoresList";
import UserScoreSaver from "./UserScoreSaver";

export type UserInfo = {
  name: string;
  score: number;
};

const GameOverDialog = () => {
  const { restart } = useHandleRestartGame();

  const handleRestart = () => {
    restart();
  };

  return (
    <Dialog onClose={handleRestart}>
      <UserScroresList />
      <UserScoreSaver />
    </Dialog>
  );
};

export default GameOverDialog;
