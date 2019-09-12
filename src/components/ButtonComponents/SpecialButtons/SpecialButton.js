import React from "react";

const SpecialButton = (props) => {
  console.log(`props.buttonS`,props.buttonS) //buttonS returns symbol
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.buttonS}</button>
    </>
  );
};

export default SpecialButton;