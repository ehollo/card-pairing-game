import * as React from "react"
import { Card } from "./utils/cardSupplier";
import { Cards } from "./Cards/Cards";
require("./app.css");

export const App = () => {
    const [score, setScore] = React.useState(0);
    const [isCheckMarkVisible, setCheckMarkVisible] = React.useState(false);
    const [restart, setRestart] = React.useState(false);
    const handleCardClick = (card: Card, matched: boolean, isCardSelectable: boolean) => {
        if (!card.isUp && isCardSelectable) {
            setScore(score + 1);
            if (matched) {
                setCheckMarkVisible(true);
                setTimeout(() => setCheckMarkVisible(false), 1300);
            }
        }
    }

    const handleRestarted = () => {
        setRestart(false);
    }

    return (
        <div className="container">
            <Cards onCardClick={handleCardClick} restart={restart} onRestarted={handleRestarted} />
            <div className="footer">
                <div></div>
                <div className="result">
                    <p className="score">Your points: {score}</p>
                    <button className="button" onClick={() => {
                        setRestart(true);
                        setScore(0);
                    }}>Reload</button>
                </div>
                {isCheckMarkVisible && <img className="check" src="./assets/checkMark.gif" />}
            </div>
        </div>)
}