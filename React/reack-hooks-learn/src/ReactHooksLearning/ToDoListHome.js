import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItemList from "./ToDoItemList";
import "./ToDoListHome.css"

const ToDoListHome = (props) => {

   const [items, setItems] =  useState([]);

   const addItems = (inputText) =>{
         setItems((prevItems)=> {
            return [...prevItems, inputText]
        })
   }
const deleteItem =(id) => {
    setItems((prevItems)=> {
        return prevItems.filter((item, index)=>{
             return index!==id;
        })      
    })
}
console.log(items)
    return <>
        <div className="container">
            <div className="header">
                <h1>ToDoList</h1>
                <InputArea additems = {addItems} />
                <div>
                    <ul>
                        {items.map((item, index)=> {
                            return <ToDoItemList key={index} text={item} deleteItem={deleteItem} id={index}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>

};

export default ToDoListHome;