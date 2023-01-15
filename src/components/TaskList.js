import React from "react";
import {TASKS} from "../data"
import Task from "./Task"

function TaskList() {
  return (
    <div className="tasks">
      {TASKS.map((prop)=>{
        return <Task key={prop.text} text={prop.text} category={prop.category} />
      })}
    </div>
  );
}

export default TaskList;
