import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categories, setCategories] = useState([...CATEGORIES]);
  const [tasks, setTasks] = useState([...TASKS]);

  const [data, setData] = useState([...TASKS]);

  function onTaskFormSubmit(task) {
    setTasks([...tasks, task]);
    setData([...data, task]);
  }
  // the second task is what we are aiming to chnge in the form

  function handleChange(data) {
    setData(data);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        tasks={tasks}
        handleChange={handleChange}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={data} />
    </div>
  );
}

export default App;
