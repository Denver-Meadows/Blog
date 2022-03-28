import React from "react";
import "../styles/blogPost.scss";

// Photo by <a href="https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fotis Fotopoulos</a> on <a href="https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const BlogPost = () => {
  const maxLength = 500;
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ad, eiusquae possimus nulla accusamus impedit ex corporis facere suscipit odioquia. Error doloremque, pariatur, incidunt libero consectetur quasimolestias illo veniam eaque laboriosam esse culpa rerum cumque totamsimilique ratione. Nisi animi fuga quos odio perspiciatis, quo sapienteid ea vitae voluptatibus temporibus at facere quam dicta tempora enimmolestiae aliquam. In tempore dolores omnis explicabo. Aut aspernaturfacilis nesciunt nisi explicabo recusandae vel. Lorem ipsum dolor sitamet consectetur adipisicing elit. Amet molestiae distinctio dolorbeatae sit? Possimus molestiae voluptate itaque adipisci quam accusamusculpa exercitationem non excepturi, officia debitis aliquid providentamet dignissimos autem aperiam sapiente minus? Dolor minus debitisaccusamus ad laboriosam nesciunt unde sed ullam. Illo excepturi natuserror aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit repudiandae quaerat, ipsam optio praesentiumconsequatur voluptatem accusamus nihil perspiciatis architecto quisexpedita culpa vitae!";

  return (
    <article className="article">
      <h2 className="article__title">Building Web Applications with React</h2>
      <h5 className="article__category">Coding</h5>
      <img
        className="article__image"
        src="https://res.cloudinary.com/dfsqn3oi6/image/upload/v1646247667/blog/fotis-fotopoulos-DuHKoV44prg-unsplash_mh7xyo.jpg"
        alt=""
      />
      {text.length > maxLength ? (
        <p className="article__details">
          {`${text.substring(0, maxLength)}...`}
          <button className="article__details__btn">[ Read more ]</button>
        </p>
      ) : (
        <p className="article__details">{text}</p>
      )}
      {/* <p className="article__details">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ad, eius
        quae possimus nulla accusamus impedit ex corporis facere suscipit odio
        quia. Error doloremque, pariatur, incidunt libero consectetur quasi
        molestias illo veniam eaque laboriosam esse culpa rerum cumque totam
        similique ratione. Nisi animi fuga quos odio perspiciatis, quo sapiente
        id ea vitae voluptatibus temporibus at facere quam dicta tempora enim
        molestiae aliquam. In tempore dolores omnis explicabo. Aut aspernatur
        facilis nesciunt nisi explicabo recusandae vel. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Amet molestiae distinctio dolor
        beatae sit? Possimus molestiae voluptate itaque adipisci quam accusamus
        culpa exercitationem non excepturi, officia debitis aliquid provident
        amet dignissimos autem aperiam sapiente minus? Dolor minus debitis
        accusamus ad laboriosam nesciunt unde sed ullam. Illo excepturi natus
        error aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quasi fugit repudiandae quaerat, ipsam optio praesentium
        consequatur voluptatem accusamus nihil perspiciatis architecto quis
        expedita culpa vitae!
      </p> */}
      <div className="article__date-comments">
        <p>March 2, 2022 | 11 Comments</p>
      </div>
    </article>
  );
};

export default BlogPost;
