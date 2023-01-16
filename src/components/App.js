import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[data,setData]=useState([...TASKS])

function handleChange(data){
    setData(data)
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} handleChange={handleChange} />
      <NewTaskForm  categories={CATEGORIES} tasks={data} setData={setData}/>
      <TaskList tasks={data}  />
    </div>
  );
}

export default App;
