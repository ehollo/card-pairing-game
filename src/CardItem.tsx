import * as React from "react"
import "./CardItem.css"

type CardProps = {
    idx: number;
    href: string;
    onClick: (isUp: boolean) => void;
    isUp: boolean;
    isPaired: boolean;
}
    
export const CardItem = ({ idx, href, onClick, isUp, isPaired }: CardProps) => {
    const handleClick = () => {
        onClick(!isUp);
    }
    const className = isPaired ? 'pairedCard' : 'upCard';
    return (
        <div key={"card" + idx} className="card" onClick={handleClick}>
            {(isUp || isPaired) ?
                (<img src={href} className={className} alt="One of the cards" />) :
                (<div className="downCard" />)
            }
        </div>
    )
}