import * as React from "react";
import "./Cards.css";
import CardContext from "../context/CardContext";
import { CardItem } from "./CardItem";

type CardsProps = {
  isSelectionEnabled: boolean;
  handleTurnOver(card1: number, card2: number): void;
};

export const Cards = ({ isSelectionEnabled, handleTurnOver }: CardsProps) => {
  const { cards, upCards, setUpCards, pairedCards, clickNum, setClickNum } =
    React.useContext(CardContext);

  const handleClick = (index: number) => {
    const isClickable =
      isSelectionEnabled &&
      !upCards.includes(index) &&
      !pairedCards.includes(index);
    if (isClickable) {
      setClickNum(clickNum + 1);

      const newUpCards = [...upCards, index];
      setUpCards(newUpCards);
      if (newUpCards.length === 2) {
        handleTurnOver(newUpCards[0], newUpCards[1]);
      }
    }
  };

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <CardItem
          key={index}
          {...card}
          idx={index}
          href={"./assets/" + card.name}
          isUp={upCards.includes(index)}
          isPaired={pairedCards.includes(index)}
          onClick={() => handleClick(index)}
        ></CardItem>
      ))}
    </div>
  );
};
