import React from "react";


const OperatorButton = (props) => {
  console.log(props.buttonO)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      <button>{props.buttonO.value}</button>
  
    </>
  );
};

export default OperatorButton; 