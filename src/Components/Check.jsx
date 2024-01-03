import { useRef } from "react"

const Check = ({ dark_mode, check_Control, task, completed }) => {
  const checker = useRef();
  const checkbox = useRef(null);

  window.addEventListener("keypress", e => {
    task.current.focus()
    if (e.key == "Enter") {
      e.preventDefault();
      // check_Control(checkbox, checker, task)
      checkbox.current.click();
      task.current.blur();
    }
  })

  return (
    <>
      <input type="checkbox" ref={checkbox} onClick={() => check_Control(checkbox, checker, task)} checked={completed}
        className={`appearance-none w-4 h-4 md:w-5 md:h-5 rounded-full ${dark_mode ? "border-very_Dark_Grey_Blue" : "border-very_Light_Grey_Blue"}
      border-1 lg:hover:border-l-first_Grad lg:hover:border-b-first_Grad lg:hover:border-r-second_Grad lg:hover:border-t-second_Grad 
      checked:bg-gradient-to-r from-first_Grad to-second_Grad checked:border-none cursor-pointer outline-none`} />
      <svg ref={checker} xmlns="http://www.w3.org/2000/svg" width="11" height="9"
        className={`absolute ${completed ? "block" : "hidden"} ml-0.5 md:ml-1`}
      ><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
    </>
  )
}

export default Check
