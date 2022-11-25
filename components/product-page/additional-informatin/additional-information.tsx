import { useState } from "react";
import product from "../../../types/product";
import classes from "./additional-information.module.scss";
import Description from "./description/description";
import InfoTable from "./info-table/info-table";
import Reviews from "./reviews/reviews";
const AdditionalInfo = ({ product }: { product: product }) => {
  const [radio, setradio] = useState("description");
  const changeHandler = (value: string) => {
    setradio(value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.selector}>
        <div>
          <input
            name="my-input"
            id="description"
            checked={radio === "description"}
            onChange={() => changeHandler("description")}
            type="radio"
          />
          <label htmlFor="description">DESCRIPTION</label>
        </div>
        <div>
          <input
            name="my-input"
            id="additional_info"
            checked={radio === "additional_info"}
            onChange={() => changeHandler("additional_info")}
            type="radio"
          />
          <label htmlFor="additional_info">ADDITIONAL INFORMATION</label>
        </div>
        <div>
          <input
            name="my-input"
            id="review"
            checked={radio === "review"}
            onChange={() => changeHandler("review")}
            type="radio"
          />
          <label htmlFor="review">REVIEWS</label>
        </div>
      </div>
      {radio === "description" ? (
        <Description />
      ) : radio === "additional_info" ? (
        <InfoTable product={product} />
      ) : (
        <Reviews />
      )}
    </div>
  );
};

export default AdditionalInfo;
