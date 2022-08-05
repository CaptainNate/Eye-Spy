import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const likes() {
    const [numberLike, setNumberLike] = useState(0);
}

const dislikes() {
    const [numberDislike, setNumberDislike] = useState(0);
}

function LikeDislikeButton() {
  return (
    <div>
      <Container>
        <h1>{numberLike}</h1>
      <Button onClick={} id="" className="all-btns">Like</Button>
      <Button onClick={} id="" className="all-btns">Dislike</Button>
      <h1>{numberDislike}</h1>
      </Container>
    </div>
  );
}

export default LikeDislikeButton;
