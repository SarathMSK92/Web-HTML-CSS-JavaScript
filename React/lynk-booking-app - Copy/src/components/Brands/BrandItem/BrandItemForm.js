import React from "react";
import classes from "./BrandItem.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const BrandItemForm = (props) => {
  return (
    <form className={classes.form}>
       
        <Input
          label="Count"
          input={{
            id: "count",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            default: "1",
          }}
        />
         <Button />
        
    </form>
  );
};

export default BrandItemForm;
