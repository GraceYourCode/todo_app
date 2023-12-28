import { useRef } from "react"

const Check = ({dark_mode, check_Control}) => {
  const checker = useRef();
  const checkbox = useRef();

  /*checking if the checkbox has been checked */
  // checkbox.checked ? checker.current.style.visibility = "auto" : checker.current.style.visibility = "hidden";

  return (
    <>
      <input type="checkbox" ref={checkbox} onClick={()=>check_Control(checkbox, checker)}
        className={`appearance-none w-5 h-5 rounded-full ${dark_mode?"border-dark_Grey_Blue":"border-very_Light_Grey_Blue"}
      border-2 checked:bg-gradient-to-r from-first_Grad to-second_Grad checked:border-none cursor-pointer`} />
      <svg ref={checker} xmlns="http://www.w3.org/2000/svg" width="11" height="9"
      className="absolute ml-1 hidden"
      ><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
    </>
  )
}

export default Check
