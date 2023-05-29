import classes from "./Header.module.css";
import { Fragment } from "react";
import lynkImage from "../../assets/lynklogo.png";
import logisticsImage from "../../assets/logistics3.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>LYNK-AddStocks</h1>
        <div className={classes["main-image"]}>
          <img src={lynkImage} alt="Lynk available items" />
        </div>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image2"]}>
        <img src={logisticsImage} alt="Lynk Logistics image"/>
      </div>
    </Fragment>
  );
};

export default Header;
