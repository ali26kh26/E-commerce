import classes from "./review-box.module.scss";
import { useState } from "react";
import Rating from "./rating/rating";
const ReviewBox = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.container}>
      <hr />
      <h1>Write a review</h1>
      <form>
        <div className={classes.labled_input}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className={classes.labled_input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="John.smith@example.com" />
        </div>
        <div className={classes.rating}>
          <h3>Rating</h3>
          <Rating />
        </div>
        <div className={classes.labled_input}>
          <label htmlFor="title">Review Title</label>
          <input
            id="title"
            type="text"
            placeholder="Give your review a title"
          />
        </div>
        <div className={classes.labled_input}>
          <label htmlFor="text">Body of review ({1500 - count})</label>
          <textarea
            placeholder="write your comments here"
            id="text"
            rows={9}
            onChange={(e) => setCount(e.target.value.length)}
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewBox;
