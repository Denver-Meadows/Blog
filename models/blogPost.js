const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    url: String,
  },
  content: {
    body: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  comments: [
    {
      type: String,
    },
  ],
});

// comments: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Comment",
//   },
// ],

module.exports = mongoose.model("BlogPost", BlogPostSchema);
