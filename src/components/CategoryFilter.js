import {CATEGORIES} from "../data"
import React,{useState} from "react";




function CategoryFilter() {
  const[isClicked, setClick] = useState(false)
 let className = "selected"

 function handleClick(e){
      setClick(!isClicked)
     // console.log("yeey")
    
 }

 





  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category,name)=>
          (
            
            <button onClick={handleClick} className={className} key={name}>{category}</button>
            
          )
      )}
    </div>
  );
}

export default CategoryFilter;
