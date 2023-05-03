import * as React from "react";
import { Cards } from "./cards/Cards";
import Footer from "./footer/Footer";
import CardContext from "./context/CardContext";
import GameOverDialog from "./dialog/GameOverDialog";
import classes from "./app.module.css";
import Header from "./header/Header";

export const App = () => {
  const { cards, setUpCards, setPairedCards, pairedCards } =
    React.useContext(CardContext);
  const [isSelectionEnabled, setIsSelectionEnabled] = React.useState(true);
  const [isCheckMarkVisible, setCheckMarkVisible] = React.useState(false);

  const handleTurnOver = (card1: number, card2: number) => {
    const isMatched = cards[card1].name === cards[card2].name;
    if (isMatched) {
      setCheckMarkVisible(true);
      setUpCards([]);
      setPairedCards([...pairedCards, card1, card2]);
      setTimeout(() => setCheckMarkVisible(false), 1000);
    } else {
      turnbackUnmatchedCards();
    }
  };

  const turnbackUnmatchedCards = () => {
    setIsSelectionEnabled(false);
    setTimeout(() => {
      setUpCards([]);
      setIsSelectionEnabled(true);
    }, 600);
  };

  const isGameEnd = cards.length === pairedCards.length;

  return (
    <div className={classes.container}>
      <Header />
      <Cards
        isSelectionEnabled={isSelectionEnabled}
        handleTurnOver={handleTurnOver}
      />
      <Footer isCheckMarkVisible={isCheckMarkVisible} />
      {isGameEnd && <GameOverDialog />}
    </div>
  );
};
