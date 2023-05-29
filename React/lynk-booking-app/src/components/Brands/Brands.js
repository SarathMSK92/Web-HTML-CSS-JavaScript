import BrandSummary from "./BrandSummary";
import AvailableItems from "./AvailableItems";
import { Fragment } from "react";

const Brands = () => {
  return (
    <Fragment>
      <BrandSummary />
      <AvailableItems />
    </Fragment>
  );
};

export default Brands;
