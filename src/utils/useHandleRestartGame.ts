import * as React from "react";
import CardContext from "../context/CardContext";
import { createCards } from "./cardSupplier";

const useHandleRestartGame = () => {
  const { setClickNum, setCards, setUpCards, setPairedCards } =
    React.useContext(CardContext);

  const handleRestartGame = () => {
    setClickNum(0);
    setTimeout(() => setCards(createCards()), 700);
    setUpCards([]);
    setPairedCards([]);
  };

  return { restart: handleRestartGame };
};

export default useHandleRestartGame;
