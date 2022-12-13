import { useRouter } from "next/router";
import classes from "./empty-wishlist.module.scss";

const EmptyWishList = () => {
  const router = useRouter();
  const pushHandler = () => {
    router.push("/collections");
  };
  return (
    <div className={classes.container}>
      <h2>
        <span>Your</span>
        <span>wishlist</span>
        <span>is currently</span>
        <span>Empty</span>
      </h2>
      <p>
        Continue browsing <span onClick={pushHandler}>here</span>
      </p>
    </div>
  );
};

export default EmptyWishList;
