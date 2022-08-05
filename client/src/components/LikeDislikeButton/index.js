import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function LikeDislikeButton() {

    const likes() {
        const [numberLike, setNumberLike] = useState(0);
    
        const increase = () => {
            setNumberLike((currentNumber) => currentNumber + 1);
        }
    }
    
    const dislikes() {
        const [numberDislike, setNumberDislike] = useState(0);
    
        const decrease = () => {
            setNumberDislike((currentNumber) => currentNumber - 1);
        }
    }

  return (
    <div>
      <Container>
        <h1>{numberLike}</h1>
      <Button onClick={increase} id="" className="all-btns">Like</Button>
      <Button onClick={decrease} id="" className="all-btns">Dislike</Button>
      <h1>{numberDislike}</h1>
      </Container>
    </div>
  );
}

export default LikeDislikeButton;
