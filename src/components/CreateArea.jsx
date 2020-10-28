import React, { useState } from "react";


function CreateArea(props)
{
   const [inputText,setinputTex]=useState("");

  function handleChange(event)
  { 
    const item=event.target.value;
    setinputTex(item);
  }

  function onSubmit()
  {
     props.addItem(inputText);
     setinputTex("");
  }

 return (
  <div className="form">
  <input 
  type="text"
  onChange={handleChange}
  value={inputText}
   />
       <button onClick={onSubmit}> <span> Add </span> </button>
       </div>
 );
}


export default CreateArea;