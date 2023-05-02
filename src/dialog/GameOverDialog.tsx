import * as React from "react"
import classes from "./GameOverDialog.module.css";
import { ChangeEvent } from "react";
import CardContext from "../context/CardContext";
import useHandleRestartGame from "../utils/useHandleRestartGame";
import Dialog from "../UI/Dialog";
import Button from "../UI/Button";

type UserInfo = {
    name: string;
    score: number;
}

const GameOverDialog = () => {
    const [name, setName] = React.useState('');
    const {clickNum} = React.useContext(CardContext);
    const {restart} = useHandleRestartGame();
    const ref = React.useCallback((element: HTMLElement) => {if(element) element.focus()}, []);

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    }

    const handleSave = () => {
        const usrScrores = JSON.parse(localStorage.getItem('userScores')) as UserInfo[] || [];
        const usr = usrScrores.find(u => u.name === name);
        if(usr) {
            if(clickNum < usr.score) {
                usr.score = clickNum;
            }
        } else {
            usrScrores.push({name, score: clickNum});
        }
        localStorage.setItem('userScores', JSON.stringify(usrScrores));
        restart();
    }


    return (
        <Dialog >
            <div>If you want to save your results enter your name</div>
            <input type="text" ref={ref} value={name} className={classes.input} required onChange={handleTextChange}></input>
            <Button type="submit" onClick={handleSave}><>Save</></Button>
        </Dialog>
    )
}

export default GameOverDialog;