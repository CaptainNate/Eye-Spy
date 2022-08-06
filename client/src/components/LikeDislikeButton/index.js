import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function LikeDislikeButton() {
  const [numberLike, setNumberLike] = useState(0);

  const increase = () => {
    setNumberLike((currentNumber) => currentNumber + 1);
  };

  const [numberDislike, setNumberDislike] = useState(0);

  const decrease = () => {
    setNumberDislike((currentNumber) => currentNumber - 1);
  };

  // add an event listener that when button is clicked, gives it a new color (e.g. orange), and if it is orange and clicked again, it turns white/neutral.
  // can try if statement for if state = false (not liked), turn button white, and if state = true (liked), turn button orange.

  // add event listener when button clicked, turns it red and if it is red and clicked again, it turns white/neutral
  // can try if statement for if state = false (not disliked), turn button white, and if state = true (disliked), turn button red

  return (
    <div>
      <Container>
        <h1>{numberLike}</h1>
        <Button onClick={increase} id="" className="all-btns">
          Like
        </Button>
        <Button onClick={decrease} id="" className="all-btns">
          Dislike
        </Button>
        <h1>{numberDislike}</h1>
      </Container>
    </div>
  );
}

export default LikeDislikeButton;
