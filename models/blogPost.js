const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    required: true,
  },
  content: {
    body: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
