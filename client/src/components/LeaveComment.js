import React from "react";
import "../styles/leave-comment.scss";

const LeaveComment = () => {
  return (
    <div className="leave-comment">
      <h3>Leave a comment</h3>
      <textarea
        name="comment"
        id="comment"
        cols="35"
        rows="4"
        placeholder="Enter your comment here..."
      ></textarea>
      <div className="leave-comment__form"></div>
    </div>
  );
};

export default LeaveComment;
