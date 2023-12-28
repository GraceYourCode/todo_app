import { useState } from "react";
import Check from "./Check"

const Search_Bar = ({dark_Mode}) => {
  const [value , setValue] = useState("Create a new todo...")

  const checker_Event_Handler = (checkbox, checker) => {
    /*
        this function checks if the checkbox is checked or not and then
        displays the next tag(SVG tag) which is hidden by default
        */
        checkbox.current.checked?checker.current.style.display = "block" : checker.current.style.display = "none";
  }


  return (
    // here is the div container which holds the search bar and checkbox for the task
    <div className={`${dark_Mode?"bg-desaturated_Blue":"bg-light_Grey"} px-6 py-4 rounded flex gap-5 items-center`}>
      <Check dark_mode={dark_Mode} check_Control={checker_Event_Handler} />
      <input type="text" placeholder={value} 
      /*
       here i want to write an inline styling to remove the default background of this input tag which is 
       white because tailwind css doesn't come with a way of removig backgrounds
      */ 
     style={{background: "none"}}
     className="text-dark_Grey_Blue outline-none w-full"
      />
    </div>
  )
}

export default Search_Bar
