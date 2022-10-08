import classes from "./about-us.module.scss";

const AboutUs = () => {
  return (
    <div className={classes.about_us}>
      <ul>
        <li>
          <span className={classes.animation}>Free Shipping </span>
          on All Orders $120
        </li>
        <li>Call: (000) 123 456 7890</li>
        <li>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
