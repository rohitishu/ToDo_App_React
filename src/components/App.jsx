import React, { useState } from "react";
import CreateArea from "./CreateArea";
import  ToDo from "./ToDo";

function App()
{
  const [items,setItem]=useState([]);
  function addItem(inputText)
  {
     setItem(prevValue=>{
         return  [...prevValue,inputText];
     });
  }

  function deleteItem(id)
  {
     setItem(prevValue=>{
        return  prevValue.filter((listData,index)=>{
             return index!==id;
         })
     });
  }
  return (
     <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <CreateArea addItem={addItem}/>
         <div>
           <ul>
             {
                items.map((listItem,index)=>{
                 return( 
                   <ToDo 
                  key={index}
                 id={index}
                 item={listItem} 
                isDelete={deleteItem}
                   />
                 );
                })
             }
             </ul>
           </div>
       </div>
  );

}

export default App;
