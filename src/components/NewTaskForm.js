import React,{useState} from "react";

function NewTaskForm({categories, tasks, setData}) {
  console.log(categories)

  const [dataFromForm, setFormData] = useState({
    text:"",
    category:""
  })
function handleChange(e){
  dataFromForm[e.target.name] = e.target.value
  (setFormData({dataFromForm, [e.target.id]:e.target.value}))
    //console.log(dataFromForm)
}

function handleClick(e){

}

function handleSubmit(e){
  e.preventDefault();
  setData([...tasks, dataFromForm])
}

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={dataFromForm.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onClick={handleClick} name="category">
          {
          categories.map((category, name)=>{
           return <option  key={name}> {category} </option> })
            }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

            
