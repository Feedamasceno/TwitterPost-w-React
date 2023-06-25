import React, { useState } from "react";
import heartOff from "./heart-icon.png";
import heartOn from "./heart-icon-on.png";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(65);

  function handleLikeClick() {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  }

  return (
    <section className="Heart" onClick={handleLikeClick}>
      <img src={liked ? heartOn : heartOff} alt="Heart" />
      <span className="LikesCount"> {likesCount} </span>
    </section>
  );
}

export default LikeButton;
