import classes from './CartItem.module.css';

const CartItem = (props) => {
  const mrp = `$${props.mrp?.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.mrp}>{mrp}</span>
          <span className={classes.count}>x {props.count}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
