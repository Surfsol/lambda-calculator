import React from "react";


const NumberButton = (props) => {
 console.log(`Numberbutton props`, props)
 console.log(`Number Button props.buttonN`, props.buttonN)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.buttonN}</button>
    </>
  );
};

export default NumberButton;