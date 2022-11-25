import classes from "./reviews.module.scss";
import { useState } from "react";
import ReviewBox from "./review-box/review-box";
const Reviews = () => {
  const [showReviewBox, setshowReviewBox] = useState(true);
  return (
    <div className={classes.container}>
      <h2>Customer Reviews</h2>
      <p role="button" onClick={() => setshowReviewBox((prev) => !prev)}>
        Write a review
      </p>
      {showReviewBox && <ReviewBox />}
    </div>
  );
};

export default Reviews;
