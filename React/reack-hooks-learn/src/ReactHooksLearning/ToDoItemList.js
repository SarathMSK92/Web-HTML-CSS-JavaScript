import React from "react";

const ToDoItemList = (props) => {

    return <div onClick={()=>props.deleteItem(props.id)}>
        <li>{props.text}</li>
    </div>
};

export default ToDoItemList;