import React, { useCallback } from "react";
import "./style.css";
const Card = React.memo(({ count, isClicked, handleCard }) => {
  const cardClasses = `cardStyle ${isClicked ? "clicked" : ""}`;
  const handleOnClickCard = useCallback(
    (id) => {
      handleCard(id);
    },
    [handleCard]
  );
  return (
    <div
      className={cardClasses}
      onClick={() => handleOnClickCard(count)}
      id={count}
    >
      <span>{"Card " + count}</span>
    </div>
  );
});
export default Card;
