import Image from "next/image";
import HideContent from "../hide-content/hide-content";
import classes from "./links.module.scss";
const Links = () => {
  return (
    <ul className={classes.container}>
      <li>
        <HideContent title="SHOP">
          <ul className={classes.content}>
            <li className={classes.content_item}>
              <ul className={classes.content_item_container}>
                <li>Fresh Food</li>
                <li>Fresh Apple (5kg)</li>
                <li>Fresh Blueberry</li>
                <li>Fresh Carrot Natural Free</li>
                <li>Fresh Grassben</li>
                <li>Blackberry 100%Organic</li>
              </ul>
            </li>
            <li className={classes.content_item}>
              <ul className={classes.content_item_container}>
                <li>MixedFruits</li>
                <li>Fresh & Healthy Food</li>
                <li>Fresh Banana 100% Safe</li>
                <li>Fresh Grassben</li>
                <li>Organic Coconet</li>
                <li>Fresh Mussel (500g)</li>
              </ul>
            </li>
            <li className={classes.content_item}>
              <ul className={classes.content_item_container}>
                <li>MixedFruits</li>
                <li>Fresh & Healthy Food</li>
                <li>Fresh Banana 100% Safe</li>
                <li>Fresh Grassben</li>
                <li>Organic Coconet</li>
                <li>Fresh Mussel (500g)</li>
              </ul>
            </li>
            <li className={classes.content_item}>
              <ul className={classes.content_item_container}>
                <li>MixedFruits</li>
                <li>Fresh & Healthy Food</li>
                <li>Fresh Banana 100% Safe</li>
                <li>Fresh Grassben</li>
                <li>Organic Coconet</li>
                <li>Fresh Mussel (500g)</li>
              </ul>
            </li>
          </ul>
        </HideContent>
      </li>
      <li>
        <HideContent title="PAGES">
          <ul className={classes.content}>
            <li className={classes.content_item}>
              <ul className={classes.content_item_container}>
                <li>Fresh Food</li>
                <li>Fresh Apple (5kg)</li>
                <li>Fresh Blueberry</li>
                <li>Fresh Carrot Natural Free</li>
                <li>Fresh Grassben</li>
                <li>Blackberry 100%Organic</li>
              </ul>
            </li>
          </ul>
        </HideContent>
      </li>
      <li>
        <HideContent title="COLLECTION">
          <ul className={classes.content}>
            <li className={classes.content_item}>
              <div className={classes.collection}>
                <Image
                  alt="watermelon"
                  src={"/assets/collections/watermelon.jpg"}
                  width={235}
                  height={150}
                />
                <p> Ice cream</p>
              </div>
            </li>
            <li className={classes.content_item}>
              <div className={classes.collection}>
                <Image
                  alt="kiwi"
                  src={"/assets/collections/kiwi.jpg"}
                  width={250}
                  height={150}
                />
                <p> Fresh Fruit</p>
              </div>
            </li>
            <li className={classes.content_item}>
              <div className={classes.collection}>
                <Image
                  alt="juice"
                  src={"/assets/collections/juice.jpg"}
                  width={250}
                  height={150}
                />
                <p> Juices</p>
              </div>
            </li>
          </ul>
        </HideContent>
      </li>
    </ul>
  );
};

export default Links;
