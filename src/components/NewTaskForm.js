import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    let task_name = document.getElementById("new-task-forms").value
    let category_name = document.getElementById("new-category").value;
    console.log([task_name, category_name]);
    onTaskFormSubmit({
      text: task_name,
      category: category_name,
    });
    document.getElementById("new-task-forms").value = "";
    document.getElementById("new-category").value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" id="new-task-forms" />
      </label>
      <label>
        Category
        <select name="category" id="new-category">
          <option></option>
          {/* the reason we are adding the first option is to make sure our selection box is empty */}
          {categories.filter((category) =>category !== "All").map((category, name) => {
              return <option key={name}> {category} </option>;
            })
            }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
