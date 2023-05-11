import React from "react";

const Card = (props) => {
  const { count, isClicked } = props;
  const rotateAngle = isClicked ? 180 : 0;

  const handleOnClickCard = (id) => {
    props.handleCard(id);
  };

  return (
    <div
      style={{
        backgroundColor: "#ed9f9f",
        margin: "12px",
        padding: "100px",
        transform: `rotate(${rotateAngle}deg)`,
        borderRadius:'5px'
      }}
      onClick={() => handleOnClickCard(count)}
      id={count}
    >
      <span>{"Card " + count}</span>
    </div>
  );
};
export default Card;
