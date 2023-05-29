import { useContext } from "react";

import classes from "./BrandItem.module.css";
import BrandItemForm from "./BrandItemForm";
import CartContext from "../../../store/cart-context";

const BrandItem = (props) => {
  const cartCtx = useContext(CartContext);
  const mrp = `MRP : $ ${props.mrp.toFixed(2)}`;

  const addToCartHandler = (count) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      count: count,
      mrp: props.mrp,
    });
  };

  return (
    <li className={classes.branditem}>
      <div className={classes.itemcontent}>
        <h3>{props.name}</h3>
        <div className={classes.itemcode}>{props.itemcode}</div>
        <div className={classes.mrp}>{mrp}</div>
        <div className={classes.description}>{props.description}</div>
        <div>
          <BrandItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default BrandItem;
