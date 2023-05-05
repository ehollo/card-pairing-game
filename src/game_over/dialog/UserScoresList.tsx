import * as React from "react";
import classes from "./UserScoresList.module.css";
import { UserInfo } from "./GameOverDialog";
import CardContext from "../../context/CardContext";

const UserScroresList = () => {
  const { clickNum } = React.useContext(CardContext);

  let players =
    (JSON.parse(localStorage.getItem("userScores")) as UserInfo[]) || [];

  const noPlayers = () => {
    return (
      players.length === 0 && (
        <div className={classes.text}>There are no saved players yet!</div>
      )
    );
  };

  const getPlayersList = () => {
    if (players.length > 0) {
      players.sort((p1, p2) => (p1.score < p2.score ? -1 : 1));
      if (players.length > 8) {
        players.splice(8);
      }
      return (
        <>
          <div className={classes.text}>Players with best scores:</div>
          <ul className={classes.players}>
            {players.map((player, idx) => (
              <li key={idx} className={classes.player}>
                {player.name} {player.score}
              </li>
            ))}
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <h1 className={classes.text}>
        Congratulations! You have found all the matching pairs!
      </h1>
      <div className={classes.summary}>Your score is {clickNum}</div>
      {noPlayers()}
      {getPlayersList()}
    </>
  );
};

export default UserScroresList;
