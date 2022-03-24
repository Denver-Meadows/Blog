import React from "react";
import "../styles/fullBlogPost.scss";
import SubscribeForm from "../components/SubscribeForm";
import ShareContent from "../components/ShareContent";
import Comments from "../components/Comments";
import LeaveAComment from "../components/LeaveComment";

const FullBlogPost = () => {
  return (
    <article className="full-blog-post__article">
      <h2 className="full-blog-post__article__headline">
        Building Web Applications with React
      </h2>
      <div className="full-blog-post__article__date">
        <p>March 2, 2022</p>
      </div>
      <h5 className="full-blog-post__article__category">Coding</h5>
      <img
        className="full-blog-post__article__image"
        src="https://res.cloudinary.com/dfsqn3oi6/image/upload/v1646247667/blog/fotis-fotopoulos-DuHKoV44prg-unsplash_mh7xyo.jpg"
        alt=""
      />
      <p className="full-blog-post__article__details">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ad, eius
        quae possimus nulla accusamus impedit ex corporis facere suscipit odio
        quia. Error doloremque, pariatur, incidunt libero consectetur quasi
        molestias illo veniam eaque laboriosam esse culpa rerum cumque totam
        similique ratione. Nisi animi fuga quos odio perspiciatis, quo sapiente
        id ea vitae voluptatibus temporibus at facere quam dicta tempora enim
        molestiae aliquam. In tempore dolores omnis explicabo.
        <br />
        <br />
        Aut aspernatur facilis nesciunt nisi explicabo recusandae vel. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae
        distinctio dolor beatae sit? Possimus molestiae voluptate itaque
        adipisci quam accusamus culpa exercitationem non excepturi, officia
        debitis aliquid provident amet dignissimos autem aperiam sapiente minus?
        Dolor minus debitis accusamus ad laboriosam nesciunt unde sed ullam.
        <br />
        <br />
        Illo excepturi natus error aspernatur. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi fugit repudiandae quaerat, ipsam
        optio praesentium consequatur voluptatem accusamus nihil perspiciatis
        architecto quis expedita culpa vitae!
      </p>
      <div className="full-blog-post__article__reply">
        <LeaveAComment />
      </div>
      <div className="full-blog-post__subscribe">
        <SubscribeForm />
      </div>
      <div className="full-blog-post__share">
        <ShareContent />
      </div>
      <div className="full-blog-post__comments">
        <Comments />
      </div>
    </article>
  );
};

export default FullBlogPost;
