import React from "react";
import "../styles/leave-comment.scss";
import CommentFrom from "./CommentForm";

const LeaveComment = () => {
  return (
    <div className="leave-comment">
      <h3>Leave a comment</h3>
      <div className="leave-comment__form">
        <CommentFrom />
      </div>
    </div>
  );
};

export default LeaveComment;
