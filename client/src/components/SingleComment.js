import React from "react";
import "../styles/single-comment.scss";

const SingleComment = () => {
  return (
    <div className="single-comment">
      <h4>Denver Meadows</h4>
      <p className="single-comment__date">March 24, 2022 AT 11:02 AM</p>
      <p className="single-comment__comment">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        dignissimos provident nihil, voluptatibus pariatur deleniti explicabo ut
        voluptas suscipit in, atque laborum vero.
      </p>
      <button className="single-comment__btn">Reply</button>
    </div>
  );
};

export default SingleComment;
