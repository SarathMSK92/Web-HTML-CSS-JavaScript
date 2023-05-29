import React, { useState } from "react";


const InputArea = (props) =>{
    const [enteredItem, setEnteredItem] = useState("");

    const captureValue =(event) =>
    {
        setEnteredItem(event.target.value);
    }

    const addEnteredItem = () =>{
        props.additems(enteredItem);
        setEnteredItem("")
    }

    return <>
    <div>
        <input type="text" onChange={captureValue} value={enteredItem}/>
        <button onClick={addEnteredItem} ><span>Add</span></button>
    </div>
    </>
};

export default InputArea;