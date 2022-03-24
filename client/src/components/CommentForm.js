import React from "react";
import "../styles/comment-form.scss";

const CommentForm = () => {
  return (
    <form className="comment-form">
      <textarea
        name="comment"
        id="comment"
        cols="35"
        rows="3"
        placeholder="Enter your comment here..."
      ></textarea>
      <input type="text" name="name" id="name" placeholder="Name (required)" />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email (required)"
      />
      <button type="submit" className="submit-button">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
