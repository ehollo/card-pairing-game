import * as React from "react"
import { CardItem } from "./CardItem"
import { Card, createCards } from "../utils/cardSupplier";
import "./Cards.css";

type CardsProps = {
    onCardClick(clickedCard: Card, matched: boolean, isCardSelectable: boolean): void;
    restart: boolean;
    onRestarted(): void;
}

export const Cards = ({ onCardClick, restart, onRestarted }: CardsProps) => {
    const [cards, setCards] = React.useState(createCards());
    const [upCards, setUpCards] = React.useState([]);
    const [isCardSelectable, setIsCardSelectable] = React.useState(true);

    const handleClick = (card: Card, index: number) => {
        if (!card.isUp && isCardSelectable) {
            setCards(cards.map<Card>((card, idx) => idx === index ? { ...card, isUp: true } : { ...card }))
            const newCards: Card[] = [...upCards, card];
            setUpCards(newCards);
            let matched = false;
            if (newCards.length === 2) {
                matched = handleCardPairs(newCards[0], newCards[1]);
            }
            onCardClick(card, matched, isCardSelectable);
        }
    }
    const handleCardPairs = (card1: Card, card2: Card): boolean => {
        if (card1.name === card2.name) {
            setCards(cards => cards.map(card => card.name === card1.name ? { ...card, isPaired: true } : card));
            setUpCards([]);
            return true;
        } else {
            turnbackUnmatchedCards();
            return false;
        }
    }
    const turnbackUnmatchedCards = () => {
        setIsCardSelectable(false);
        setTimeout(() => {
            setCards(cards => cards.map((card) => card.isPaired ? card : { ...card, isUp: false }));
            setIsCardSelectable(true);
            setUpCards([]);
        }, 800);
    }

    if(restart) {
        setCards(createCards());
        onRestarted();
    }

    return (
        <div key="cards" className="cards">
            {cards.map((card, index) =>
                <CardItem {...card} idx={index} href={"./assets/" + card.name} onClick={(isUp: boolean) => handleClick(card, index)} ></CardItem>)}
        </div>);
}