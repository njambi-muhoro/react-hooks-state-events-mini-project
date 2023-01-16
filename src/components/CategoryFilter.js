
import React from "react";




function CategoryFilter({categories,tasks, handleChange}) {

  function setCategory(category){
    let filterTasks = []
    if(category === "All"){
      filterTasks = tasks
    }else{
      filterTasks = tasks.filter((task)=>{
        return task.category === category
      })
    }
    handleChange(filterTasks)
    console.log(filterTasks)
    let buttons = document.querySelectorAll("button")
    buttons.forEach((button)=>{
      button.classList.remove("selected")
    })
  
  let selectedButton = document.querySelector("button#" + category);
  selectedButton.classList.add("selected")

  }



return (
  <div className="categories">
    <h5>Category filters</h5>
    {categories.map((category,name)=>{ 
      return <button onClick={()=>setCategory(category)} id={category}  key={name}>{category}</button>
          
         })}
    
  </div>
)
}
export default CategoryFilter;
      
     


     
  
      

 






