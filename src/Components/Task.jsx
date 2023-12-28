import { useState } from "react";
import Check from "./Check"

const Task = ({dark_Mode}) => {
  const [checked, setChecked] = useState(false)

  const checker_Event_Handler = (checkbox, checker) => {
    /*
        this function checks if the checkbox is checked or not and then
        displays the next tag(SVG tag) which is hidden by default
        and also strike-through the todo text
        */
        if (checkbox.current.checked) {
          checker.current.style.display = "block";
          setChecked(true);
        } else {
          checker.current.style.display = "none";
          setChecked(false);
        }
  }

  return (
    <div className="flex px-6 py-4 gap-5 items-center border-b-1 border-b-dark_Grey_Blue">
      <Check dark_mode={dark_Mode} check_Control={checker_Event_Handler} />
      <p className={`w-4/5 text-sm ${dark_Mode?"text-light_Grey_Blue":"text-light_Mode_Very_Dark_Grey_Blue"} 
      ${checked & dark_Mode && "line-through text-dark_Grey_Blue"} ${checked & dark_Mode == false && "line-through text-light_Mode_Dark_Grey_Blue"}`}>Complete online javascript course</p>
      <button className="invisible">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </button>
    </div>
  )
}

export default Task
