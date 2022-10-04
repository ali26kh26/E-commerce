import classes from "./footer.module.scss";
import Logo from "../../icons/Logo";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
import SubscribeInput from "../../../UI/subscribe-input/subscribe-input";
import SmScreenContent from "./sm-screen-content/sm-screen-content";
import LgScreenContent from "./lg-screen-content/lg-screen-content";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.logo}>
          <div>
            <Logo />
          </div>
          <div>
            Lorem Ipsum is simply dummy of the printing and typesetting industry
            lorem Ipsum
          </div>
          <div>
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        {/* <div className={classes.content}>
          <h2>SERVICES</h2>
          <ul>
            <li>Fresh Fruits</li>
            <li>Fresh Meat</li>
            <li>Cow Milk</li>
            <li>Haldi powder</li>
            <li>Sea & Fish</li>
          </ul>
        </div>
        <div className={classes.content}>
          <h2>PRIVACY & TERMS</h2>
          <ul>
            <li>My cart</li>
            <li>Wishlist</li>
            <li>Sign in</li>
            <li>Shipping details</li>
            <li>Help center</li>
          </ul>
        </div>
        <div className={classes.content}>
          <h2>MY ACCOUNT</h2>
          <ul>
            <li>About vegist</li>
            <li>Faq's</li>
            <li>Contact us</li>
            <li>News</li>
            <li>Store location</li>
          </ul>
        </div> */}
        <LgScreenContent />
        <SmScreenContent />
        <div className={classes.subscribe}>
          <h1>SUBSCRIBE LATEST DEAL</h1>
          <p>
            Subscribe to our newsletter to receive fashion store news on new
            update.
          </p>
          <div>
            <SubscribeInput />
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.bottom}>
        <p>
          © 2022 Developd by <span>Ali Khodadadi</span>
        </p>
        <ul>
          <li>
            {" "}
            <FaGithub />
          </li>
          <li>
            {" "}
            <FaLinkedin />
          </li>
          <li>
            <FaRegEnvelope />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
