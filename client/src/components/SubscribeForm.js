import React from "react";
import "../styles/subscribeForm.scss";

const SubscribeForm = () => {
  return (
    <section className="subscribe">
      <p className="subscribe__headline">Liked this? Get free email updates</p>

      <p className="subscribe__details">
        Enter your name and email address below. No spam. No BS. Unsubscribe
        anytime.
      </p>

      <form action="" className="subscribe__form">
        <input
          className="subscribe__form__name"
          type="text"
          placeholder="Your first name"
          // onChange="handleChange"
          // value={searchInput}
        ></input>
        <input
          className="subscribe__form__email"
          type="email"
          placeholder="Your email address"
          // onChange="handleChange"
          // value={searchInput}
        ></input>
        <button className="subscribe__form__btn">Subscribe</button>
      </form>
    </section>
  );
};

export default SubscribeForm;
