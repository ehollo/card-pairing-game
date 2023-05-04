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
  const classNameUp = isPaired ? "paired-card" : "up-card";

  const downCard = () => {
    return !isUp && !isPaired && <div className="down-card" />;
  };

  const upCard = () => {
    return (
      (isUp || isPaired) && (
        <img src={href} className={classNameUp} alt="One of the cards" />
      )
    );
  };

  return (
    <div key={"card" + idx} className="card" onClick={handleClick}>
        {downCard()}
        {upCard()}
    </div>
  );
};
