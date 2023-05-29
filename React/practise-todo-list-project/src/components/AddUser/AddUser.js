import React from "react";
 
const AddUser = (props) =>{

 return <form > 
        <div className="add-user"> 
            <label id="username">Username</label>
            <input type="text" />
            <label id="age">Age</label>
            <input type="number"/>
            <button>Add User</button>
        </div>
 </form>

};

export default AddUser;