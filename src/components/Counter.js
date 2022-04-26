import React  from 'react'
import { useState } from 'react'; //named export because in bracket

const Counter = ( )=>{
    const [name, setName] = useState ("Vaibhav");

    //returns a state variable and a function using which you can update the state value .because we do not have setState function in functional component .Also it will take the initial value of hte state variable.

    const [user,setUser]= useState({name:"Vaibhav" , age :34});

    //function to update name 
    const updateState=()=>{
        setName("Ram");
    }

    const updateObject =()=>{
        setUser((prevState)=>({
            ...prevState,
            age:42
        }))
    }

    return (
        <div>
            <p>My name is {name}</p>
            <button onClick={updateState}>Change name</button>
            <button onClick={()=>setName("Vaibhav")}> Original Name </button>

            <p>state as an object, {user.name}</p>
            <p>state as an object ,{user.age}</p>
            <button onClick={updateObject}> Click to update</button>
        </div>
    )
}
export default Counter


//