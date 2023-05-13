import React, { useCallback, useState } from "react";
import Card from "./Card.js";
import "./style.css";

const CardList = React.memo(({ cardCount }) => {
  const [clickedCardId, setClickedCardId] = useState();

  const handleCard = (id) => {
    setClickedCardId(id);
  };

  //useCallback avoid function recreation , it will create function when the dependency is changed
  const renderCard = useCallback(
    (cardCount) => {
      const cards = [];
      for (let i = 1; i <= cardCount; i++) {
        const isClicked = i === clickedCardId;
        cards.push(
          <Card
            key={i}
            count={i}
            handleCard={handleCard}
            isClicked={isClicked}
          />
        );
      }
      return cards;
    },
    [clickedCardId]
  );

  return (
    <>
      <table className="tableStyle">
        <tbody>
          <tr>{renderCard(cardCount)}</tr>
        </tbody>
      </table>
    </>
  );
});
export default CardList;
