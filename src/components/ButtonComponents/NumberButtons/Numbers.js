import React, {useState} from "react";
import {numbers} from '../../../data'
import NumberButton from './NumberButton'

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  // did not use setState, because not necessary
  const [numberState] = useState(numbers);
  // numberState is an array
  console.log(numberState)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array 
      data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
    
       numberState.map((buttonN, index) =>(
         <NumberButton key={index} buttonN={buttonN} />
       ))}
    </div>   
  );
};

export default Numbers;