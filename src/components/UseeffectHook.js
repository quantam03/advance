import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [a, setA] = useState("ABC");
  const [b, setB] = useState("XYZ");

  //   useEffect(() => {
  //     console.log("Hello useEffect Hook");
  //   },[a]);

  //ComponentWillUnmount : Cleanup function in useEffect
  useEffect(() => {
    console.log("inside useEffect hook");
    return function cleanup() {
      console.log("UseEffect ");
    };
  });

  return (
    <div>
      <h1>
        useEffect
        <p>Value of a state variable = {a}</p>
        <p>Value of b state variable = {b}</p>
        <button onClick={() => setA("QWE")}>Update a state variable</button>
        <button onClick={() => setB("ASD")}>Update b state variable</button>
      </h1>
    </div>
  );
};

export default UseEffectHook;

//usedEffect
//alternative of lifecycle methods
//when you want to make server calls
//componentdidMount, componentdidUdate, componentwillunmount
//hook which accepts firts parameter as a callback function, and second paramter is dependancy array
//if you want that useEffect should run like a componentdidupdate then : pass an empty dependancy
//How the useEffect can be excuted like componentdidUpdate only for one state variable : pass the dependancy for which you want to
//cleanup function : this function gets executed when the component is unmounted from the screen. this is
// mostly used for memory leaks