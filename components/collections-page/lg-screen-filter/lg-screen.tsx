import Image from "next/image";
import AvailabilityFilter from "./availability-filter/availability-filter";
import FilterItems from "./filter-items/filter-items";
import classes from "./lg-screen-filter.module.scss";
import MaterialFilter from "./material-filter/material-filter";
import SizeFilter from "./size-filter/size-filter";

const LgScreenFilter = () => {
  return (
    <div className={classes.container}>
      <FilterItems title="Filter">16 products</FilterItems>
      <SizeFilter />
      <MaterialFilter />
      <AvailabilityFilter />
      <FilterItems title="Price">price</FilterItems>
      <Image
        alt="banner"
        width={100}
        height={110}
        src="/assets/banner/side-banner.webp"
        layout="responsive"
      />
    </div>
  );
};

export default LgScreenFilter;
