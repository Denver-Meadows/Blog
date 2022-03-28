// To seed the DB we want this file to be self-contained (connected to Mongoose and use the Model)
// Reminder:  We always run this file separate, without node, whenever we want to seed our DB.

const mongoose = require("mongoose");
const BlogPost = require("../models/blogPost");
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Mongoose Error");
    console.log(err);
  });

const seedCodingBlogPosts = async () => {
  const blogPost = new BlogPost({
    title: "Building Web Applications with React",
    category: "Coding",
    image:
      "https://res.cloudinary.com/dfsqn3oi6/image/upload/v1646247667/blog/fotis-fotopoulos-DuHKoV44prg-unsplash_mh7xyo.jpg",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ad, eiusquae possimus nulla accusamus impedit ex corporis facere suscipit odioquia. Error doloremque, pariatur, incidunt libero consectetur quasimolestias illo veniam eaque laboriosam esse culpa rerum cumque totamsimilique ratione. Nisi animi fuga quos odio perspiciatis, quo sapienteid ea vitae voluptatibus temporibus at facere quam dicta tempora enimmolestiae aliquam. In tempore dolores omnis explicabo. Aut aspernaturfacilis nesciunt nisi explicabo recusandae vel. Lorem ipsum dolor sitamet consectetur adipisicing elit. Amet molestiae distinctio dolorbeatae sit? Possimus molestiae voluptate itaque adipisci quam accusamusculpa exercitationem non excepturi, officia debitis aliquid providentamet dignissimos autem aperiam sapiente minus? Dolor minus debitisaccusamus ad laboriosam nesciunt unde sed ullam. Illo excepturi natuserror aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit repudiandae quaerat, ipsam optio praesentiumconsequatur voluptatem accusamus nihil perspiciatis architecto quisexpedita culpa vitae!",
    date: Date.now(),
    comments: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dignissimos provident nihil, voluptatibus pariatur deleniti explicabo utvoluptas suscipit in, atque laborum vero.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dignissimos provident nihil, voluptatibus pariatur deleniti explicabo utvoluptas suscipit in, atque laborum vero.",
    ],
  });
  await blogPost.save();
};

const seedRunningBlogPosts = async () => {
  const blogPost = new BlogPost({
    title: "Training to Run a Half Marathon",
    category: "Running",
    image:
      "https://res.cloudinary.com/dfsqn3oi6/image/upload/v1646247667/blog/fotis-fotopoulos-DuHKoV44prg-unsplash_mh7xyo.jpg",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ad, eiusquae possimus nulla accusamus impedit ex corporis facere suscipit odioquia. Error doloremque, pariatur, incidunt libero consectetur quasimolestias illo veniam eaque laboriosam esse culpa rerum cumque totamsimilique ratione. Nisi animi fuga quos odio perspiciatis, quo sapienteid ea vitae voluptatibus temporibus at facere quam dicta tempora enimmolestiae aliquam. In tempore dolores omnis explicabo. Aut aspernaturfacilis nesciunt nisi explicabo recusandae vel. Lorem ipsum dolor sitamet consectetur adipisicing elit. Amet molestiae distinctio dolorbeatae sit? Possimus molestiae voluptate itaque adipisci quam accusamusculpa exercitationem non excepturi, officia debitis aliquid providentamet dignissimos autem aperiam sapiente minus? Dolor minus debitisaccusamus ad laboriosam nesciunt unde sed ullam. Illo excepturi natuserror aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit repudiandae quaerat, ipsam optio praesentiumconsequatur voluptatem accusamus nihil perspiciatis architecto quisexpedita culpa vitae!",
    date: Date.now(),
    comments: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dignissimos provident nihil, voluptatibus pariatur deleniti explicabo utvoluptas suscipit in, atque laborum vero.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dignissimos provident nihil, voluptatibus pariatur deleniti explicabo utvoluptas suscipit in, atque laborum vero.",
    ],
  });
  await blogPost.save();
};

const seedReadingBlogPosts = async () => {
  const blogPost = new BlogPost({
    title: "Books to Read this Spring",
    category: "Reading",
    image:
      "https://res.cloudinary.com/dfsqn3oi6/image/upload/v1646247667/blog/fotis-fotopoulos-DuHKoV44prg-unsplash_mh7xyo.jpg",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ad, eiusquae possimus nulla accusamus impedit ex corporis facere suscipit odioquia. Error doloremque, pariatur, incidunt libero consectetur quasimolestias illo veniam eaque laboriosam esse culpa rerum cumque totamsimilique ratione. Nisi animi fuga quos odio perspiciatis, quo sapienteid ea vitae voluptatibus temporibus at facere quam dicta tempora enimmolestiae aliquam. In tempore dolores omnis explicabo. Aut aspernaturfacilis nesciunt nisi explicabo recusandae vel. Lorem ipsum dolor sitamet consectetur adipisicing elit. Amet molestiae distinctio dolorbeatae sit? Possimus molestiae voluptate itaque adipisci quam accusamusculpa exercitationem non excepturi, officia debitis aliquid providentamet dignissimos autem aperiam sapiente minus? Dolor minus debitisaccusamus ad laboriosam nesciunt unde sed ullam. Illo excepturi natuserror aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit repudiandae quaerat, ipsam optio praesentiumconsequatur voluptatem accusamus nihil perspiciatis architecto quisexpedita culpa vitae!",
    date: Date.now(),
    comments: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dignissimos provident nihil, voluptatibus pariatur deleniti explicabo utvoluptas suscipit in, atque laborum vero.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dignissimos provident nihil, voluptatibus pariatur deleniti explicabo utvoluptas suscipit in, atque laborum vero.",
    ],
  });
  await blogPost.save();
};

const seedDBs = async () => {
  await BlogPost.deleteMany({}); // delete everything
  await seedCodingBlogPosts();
  await seedReadingBlogPosts();
  await seedRunningBlogPosts();
};

seedDBs().then(() => {
  mongoose.connection.close();
});
