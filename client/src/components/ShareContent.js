import React from "react";
import "../styles/shareContent.scss";
import {
  GrLinkedinOption,
  GrFacebookOption,
  GrTwitter,
  GrReddit,
} from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const ShareContent = () => {
  return (
    <section className="share">
      <p className="share__headline">Share this post</p>
      <ul className="share__box">
        <li className="share__box__link share__box__link--facebook">
          <GrFacebookOption />
        </li>
        <li className="share__box__link share__box__link--twitter">
          <GrTwitter />
        </li>
        <li className="share__box__link share__box__link--linkedin">
          <GrLinkedinOption />
        </li>
        <li className="share__box__link share__box__link--reddit">
          <GrReddit />
        </li>
        <li className="share__box__link share__box__link--email">
          <MdEmail />
        </li>
      </ul>
    </section>
  );
};

export default ShareContent;
