import Image from "next/image";
import AvailabilityFilter from "./availability-filter/availability-filter";
import FilterBadgeBox from "./filter-badge-box/filter-badge-box";
import FilterItems from "./filter-items/filter-items";
import classes from "./lg-screen-filter.module.scss";
import MaterialFilter from "./material-filter/material-filter";
import SizeFilter from "./size-filter/size-filter";
import PriceFilter from "./price-filter/price-filter";
const LgScreenFilter = ({ productsNums }: { productsNums: number }) => {
  return (
    <div className={classes.container}>
      <FilterItems title="Filter">
        {productsNums} products
        <FilterBadgeBox />
      </FilterItems>
      <SizeFilter />
      <MaterialFilter />
      <AvailabilityFilter />
      <PriceFilter />
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
