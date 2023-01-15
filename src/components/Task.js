import React,{useState} from "react";

function Task({text, category}) {
  const[isDelete, setDeleted] = useState(false)

  function handleDelete(){
    setDeleted(true)
  }
      if(isDelete === true){
        return "";
      }
  

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
