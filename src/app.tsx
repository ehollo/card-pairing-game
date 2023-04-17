import * as React from "react"
import { CardItem } from "./CardItem";
import { Card, createCards } from "./utils/cardSupplier";
require("./app.css")



export const App = () => {
    const [cards, setCards] = React.useState(createCards());
    const [upCards, setUpCards] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [isCheckMarkVisible, setCheackMarkVisible] = React.useState(false);
    const [isCardSelectable, setIsCardSelectable] = React.useState(true);
    const handleClick = (card: Card, index: number) => {
        if (!card.isUp && isCardSelectable) {
            setScore(score + 1);
            setCards(cards.map<Card>((card, idx) => idx === index ? { ...card, isUp: true } : { ...card }))
            const newCards: Card[] = [...upCards, card];
            setUpCards(newCards);
            if (newCards.length === 2) {
                handleCardPairs(newCards[0], newCards[1]);
            }
        }
    }
    const handleCardPairs = async (card1: Card, card2: Card) => {
        if (card1.name === card2.name) {
            setCards(cards => cards.map(card => card.name === card1.name ? { ...card, isPaired: true } : card));
            setUpCards([]);
            setCheackMarkVisible(true);
            setTimeout(() => setCheackMarkVisible(false), 1300);
        } else {
            await turnbackUnmatchedCards();
        }
    }
    const turnbackUnmatchedCards = () => {
        setIsCardSelectable(false);
        return new Promise(() => {
            setTimeout(() => {
                setCards(cards => cards.map((card) => card.isPaired ? card : { ...card, isUp: false }));
                setIsCardSelectable(true);
                setUpCards([]);
            }, 800);
        });
    }
    return (<div className="container">
        <div key="cards" className="cards">
            {cards.map((card, index) => <CardItem {...card} idx={index} href={"./assets/" + card.name} onClick={(isUp: boolean) => handleClick(card, index)}  ></CardItem>)}
        </div>
        <div className="footer">
            <div></div>
            <div className="result">
                <p className="score">Your points: {score}</p>
                <button className="button" onClick={() => {
                    setCards(createCards());
                    setScore(0);
                }}>Reload</button>
            </div>
            {isCheckMarkVisible && <img className="check" src="./assets/checkMark.gif" />}
        </div>
    </div>)
}