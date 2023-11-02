import React, { useState } from "react";

function Todo({ todoData, isFinished, changeFinished,onDelete,OnEdit }) {
  const [finished, setfinished] = useState(isFinished);
  const [isEdatting, setisEdatting] = useState(false)
  const [EditText, setEditText] = useState(todoData)
  return (
    <div>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) =>{
           setfinished(e.target.checked)
          changeFinished(e.target.checked)
          }
         } />
    {(isEdatting) ? <input type="text" value={EditText} 
    onChange={(e)=>setEditText(e.target.value)} />:todoData}
      <button onClick={()=> {
        setisEdatting(!isEdatting)
        OnEdit(EditText)
      }}
      
      >{(!isEdatting)? "Edit": "Save" }</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
