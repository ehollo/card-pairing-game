import * as React from "react";
import { Card } from "../utils/cardSupplier";

export type CardContextType = {
  cards: Card[];
  upCards: number[];
  pairedCards: number[];
  clickNum: number;
  setCards(cards: Card[]): void;
  setUpCards(upCards: number[]): void;
  setPairedCards(pairedCards: number[]): void;
  setClickNum(clickNum: number): void;
};

const CardContext = React.createContext<CardContextType>({
  cards: [],
  upCards: [],
  pairedCards: [],
  clickNum: 0,
  setCards(cards) {},
  setUpCards(upCards) {},
  setPairedCards(pairedCards) {},
  setClickNum(clickNum) {},
});

export default CardContext;
