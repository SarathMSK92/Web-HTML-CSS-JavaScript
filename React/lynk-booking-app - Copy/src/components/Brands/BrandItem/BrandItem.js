import React from "react";
import classes from "./BrandItem.module.css";
import BrandItemForm from "./BrandItemForm";

const BrandItem = (props) => {
  const mrp = `$${props.mrp}`;

  return (
    <li className={classes.branditem}>
      <div>
        <h3>{props.name}</h3>
          <div className={classes.itemcode}>{props.itemcode}</div>
          <div className={classes.mrp}>{mrp}</div>
          <div className={classes.description}>{props.description}</div>
        <BrandItemForm />
      </div>

    </li>
  );
};

export default BrandItem;
