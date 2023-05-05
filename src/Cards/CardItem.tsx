import * as React from "react";
import "./CardItem.css";

type CardProps = {
  idx: number;
  href: string;
  onClick: () => void;
  isUp: boolean;
  isPaired: boolean;
};

export const CardItem = ({ idx, href, onClick, isUp, isPaired }: CardProps) => {
  const handleClick = () => {
    onClick();
  };

  const cardClass = "card" + (isUp || isPaired ? " clicked" : "");

  const classNameUp = isPaired ? "paired-card" : "up-card";

  const downCard = () => {
    return <div className="down-card" />;
  };

  const upCard = () => {
    return (
      <div className={classNameUp}>
        <img src={href} alt="One of the cards" />
      </div>
    );
  };

  return (
    <div key={"card" + idx} className={cardClass} onClick={handleClick}>
      <div className="flip-card">
        {downCard()}
        {upCard()}
      </div>
    </div>
  );
};
