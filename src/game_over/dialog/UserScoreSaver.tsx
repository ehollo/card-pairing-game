import * as React from "react";
import classes from "./UserScoreSaver.module.css";
import Button from "../../UI/Button";
import CardContext from "../../context/CardContext";
import useHandleRestartGame from "../../utils/useHandleRestartGame";
import { UserInfo } from "./GameOverDialog";

const UserScoreSaver = () => {
  const [name, setName] = React.useState("");
  const { clickNum } = React.useContext(CardContext);
  const { restart } = useHandleRestartGame();

  const ref = React.useCallback((element: HTMLElement) => {
    if (element) element.focus();
  }, []);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    savePlayer();
    restart();
  };

  const savePlayer = (event?: React.FormEvent<HTMLFormElement>) => {
    event && event.preventDefault();
    if (name.trim().length > 0) {
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

  return (
    <>
      <div className={classes.text}>
        If you want to save your results enter your name!
      </div>
      <form className={classes.form} onSubmit={handleSave} action="">
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
    </>
  );
};

export default UserScoreSaver;
