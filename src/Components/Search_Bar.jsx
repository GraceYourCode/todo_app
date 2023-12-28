import { useState } from "react";
import Check from "./Check"

const Search_Bar = ({dark_Mode}) => {
  const [value , setValue] = useState("Create a new todo...")

  return (
    // here is the div container which holds the search bar and checkbox for the task
    <div className={`${dark_Mode?"bg-desaturated_Blue":"bg-light_Grey"} px-6 py-4 rounded flex gap-5 items-center`}>
      <Check dark_mode={dark_Mode} />
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
