import React, { useState } from "react";
import Card from "./Card.js";

const HighComp = (props) => {
  const { cardCount } = props;
  const [clickedCardId, setClickedCardId] = useState();

  const handleCard = (id) => {
    setClickedCardId(id);
  };

  const renderCard = (cardCount) => {
    let cards = [];
    for (let i = 1; i <= cardCount; i++) {
        var isClicked = false
        if( i === clickedCardId){
            isClicked = true
        }
      cards.push(<Card key={i} count={i} handleCard={handleCard} isClicked= {isClicked} />);
    }
    return cards;
  };

  return (
    <>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tbody>
          <tr>{renderCard(cardCount)}</tr>
        </tbody>
      </table>
    </>
  );
};
export default HighComp;
