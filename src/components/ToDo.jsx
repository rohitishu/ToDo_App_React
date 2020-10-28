import React from "react";

function ToDo(props)
{
  function onSumbmit()
  {
   props.isDelete(props.id);
  }
  return (
    <li onClick={onSumbmit}> {props.item} </li>
  );
}

export default ToDo;