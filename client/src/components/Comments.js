import React from "react";
import "../styles/comments.scss";
import LeaveAComment from "./LeaveComment";

const Comments = () => {
  return (
    <section className="comments">
      <LeaveAComment />
      <h2 className="comments__count">11 Comments</h2>
    </section>
  );
};

export default Comments;
