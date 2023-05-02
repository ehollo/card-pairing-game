import * as React from "react";
import CardContext, { CardContextType } from "./CardContext";
import { createCards } from "../utils/cardSupplier";


const CardProvider = ({ children }: { children: JSX.Element }) => {
    const [ cards, setCards ] = React.useState(createCards(4));
    const [ upCards, setUpCards ] = React.useState([]);
    const [ pairedCards, setPairedCards ] = React.useState([]);
    const [clickNum, setClickNum] = React.useState(0);

    const cardContext: CardContextType = {
        cards,
        upCards,
        pairedCards,
        clickNum,
        setCards,
        setUpCards,
        setPairedCards,
        setClickNum,
    }

    return (
        <CardContext.Provider value={cardContext}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider;