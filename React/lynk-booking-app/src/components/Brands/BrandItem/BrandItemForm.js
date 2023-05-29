import { useRef, useState } from "react";
import classes from "./BrandItemForm.module.css";
import Input from "../../UI/Input";

const BrandItemForm = (props) => {
  const [countIsValid, setCountIsValid] = useState(true);
  const countInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredCount = countInputRef.current.value;
    const enteredCountNumber = +enteredCount;

    if (
      enteredCount.trim().length === 0 ||
      enteredCountNumber < 1 ||
      enteredCountNumber > 5
    ) {
      setCountIsValid(false);
      return;
    }
    props.onAddToCart(enteredCountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={countInputRef}
        label="Count"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!countIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default BrandItemForm;
