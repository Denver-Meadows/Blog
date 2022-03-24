import React from "react";
import "../styles/comments.scss";
import SubmitComment from "./SubmitComment";
import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <section className="comments">
      <SubmitComment />
      <h2 className="comments__count">11 Comments</h2>
      <div className="comments__section">
        <SingleComment />
        <SingleComment />
      </div>
    </section>
  );
};

export default Comments;
