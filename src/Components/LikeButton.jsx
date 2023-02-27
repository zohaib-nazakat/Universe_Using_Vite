import React, { useState } from "react";
import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";

function LikeDislikeButtons() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(1);
  const [dislikeCount, setDislikeCount] = useState(1);

  const handleLikeClick = () => {
    setLike(!like);
    setDislike(false);
    setLikeCount(like ? likeCount - 1 : likeCount + 1);
    setDislikeCount(dislike && !like ? dislikeCount - 1 : dislikeCount);
  };

  const handleDislikeClick = () => {
    setDislike(!dislike);
    setLike(false);
    setDislikeCount(dislike ? dislikeCount - 1 : dislikeCount + 1);
    setLikeCount(like && !dislike ? likeCount - 1 : likeCount);
  };

  const iconStyle = {
    fontSize: "15px",
    cursor: "pointer",
  };

  const likeButtonStyle = {
    color: like ? "blue" : "black",
  };

  const dislikeButtonStyle = {
    color: dislike ? "red" : "black",
  };

  return (
    <div style={{ display: "Inline-flex" }}>
      <span onClick={handleLikeClick} style={{ ...iconStyle, ...likeButtonStyle }}>
        <ThumbUpAlt/> {likeCount}
      </span>
      <span onClick={handleDislikeClick} style={{ ...iconStyle, ...dislikeButtonStyle }}>
        <ThumbDownAlt/> {dislikeCount}
      </span>
    </div>
  );
}

export default LikeDislikeButtons;
