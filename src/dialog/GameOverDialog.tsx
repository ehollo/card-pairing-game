import * as React from "react";
import classes from "./GameOverDialog.module.css";
import { ChangeEvent } from "react";
import CardContext from "../context/CardContext";
import useHandleRestartGame from "../utils/useHandleRestartGame";
import Dialog from "../UI/Dialog";
import Button from "../UI/Button";
import UserScroresList from "./UserScoresList";

export type UserInfo = {
  name: string;
  score: number;
};

const GameOverDialog = () => {
  const [name, setName] = React.useState("");
  const { clickNum } = React.useContext(CardContext);
  const { restart } = useHandleRestartGame();
  const ref = React.useCallback((element: HTMLElement) => {
    if (element) element.focus();
  }, []);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleSave = () => {
    savePlayer();
    restart();
  };

  const savePlayer = () => {
    if (name.length > 0) {
      const players =
        (JSON.parse(localStorage.getItem("userScores")) as UserInfo[]) || [];
      const player = players.find((u) => u.name === name);
      if (player) {
        if (clickNum < player.score) {
          player.score = clickNum;
        }
      } else {
        players.push({ name, score: clickNum });
      }
      localStorage.setItem("userScores", JSON.stringify(players));
    }
  };

  const handleRestart = () => {
    restart();
  };

  return (
    <Dialog onClose={handleRestart}>
      <UserScroresList score={clickNum} />
      <div className={classes.text}>
        If you want to save your results enter your name
      </div>
      <form onSubmit={handleSave} action="">
        <label htmlFor="name" className={classes["text-label"]}>
          Name
        </label>
        <input
          type="text"
          id="name"
          ref={ref}
          value={name}
          className={classes.input}
          required
          onChange={handleTextChange}
        ></input>
        <Button type="submit" onClick={handleSave}>
          <>Save</>
        </Button>
      </form>
    </Dialog>
  );
};

export default GameOverDialog;
