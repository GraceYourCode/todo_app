import { useCallback, useContext, useRef, useState } from "react";
import Check from "./Check"
import { tasks } from "../Store";

const Task = ({ dark_Mode, task, delete_Task }) => {

  let { allTasks, setAllTasks } = useContext(tasks);
  const del_Btn = useRef();
  const [edit, setEdit] = useState(false);
  const edit_Input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const checker_Event_Handler = (checkbox, checker) => {
    /*
        this function checks if the checkbox is checked or not and then
        displays the next tag(SVG tag) which is hidden by default
        and also strike-through the todo text
        */
    let completed_Event = allTasks.filter(aTask => aTask.id == task.id)[0];

    if (checkbox.current.checked) {
      completed_Event.completed = true;
      let other_Tasks = allTasks.filter(theTasks => theTasks.id != completed_Event.id)
      setAllTasks([...other_Tasks, completed_Event]);
      localStorage.setItem("allTasks", JSON.stringify(allTasks));
    } else {
      completed_Event.completed = false;
      let other_Tasks = allTasks.filter(theTasks => theTasks.id != completed_Event.id)
      setAllTasks([...other_Tasks, completed_Event]);
      localStorage.setItem("allTasks", JSON.stringify(allTasks));
    }
  }

  const show_Del_Btn = () => del_Btn.current.style.display = "block";
  const cancel_Del_Btn = () => del_Btn.current.style.display = "none";

  const edit_Task = () => {
    setEdit(true);
    edit_Input.current.focus();
    // window.removeEventListener("keypress")
  }

  return (
    <>
      {edit ? <div className={`flex ${dark_Mode ? "bg-desaturated_Blue text-light_Grey_Blue" : "bg-light_Grey text-light_Mode_Very_Dark_Grey_Blue"}
      px-3 md:px-4 lg:px-6 py-4 gap-3.5 lg:gap-5 items-center mb-0.5`}>
        <input type="text" defaultValue={task.task} className="w-full bg-transparent outline-none text-xs md:text-sm" ref={edit_Input} />
        <button className="flex items-center gap-1 text-xs bg-gradient-to-r from-first_Grad to-second_Grad text-white md:px-2 px-1.5 py-0.5 md:py-1 rounded"><span>Edit</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
        </button>
      </div> :
        <div className={`flex ${dark_Mode ? "bg-desaturated_Blue" : "bg-light_Grey"} px-3 md:px-4 lg:px-6 py-4 gap-3.5 lg:gap-5 items-center mb-0.5`}
          onMouseOver={() => show_Del_Btn()} onMouseOut={() => cancel_Del_Btn()} onDoubleClick={() => edit_Task()}>
          <Check dark_mode={dark_Mode} check_Control={checker_Event_Handler} completed={task.completed} />
          <p className={`w-4/5 text-xs md:text-sm ${dark_Mode ? (task.completed ? "text-dark_Grey_Blue" : "text-light_Grey_Blue") :
            (task.completed ? "text-light_Mode_Dark_Grey_Blue" : "text-light_Mode_Very_Dark_Grey_Blue")} 
      ${task.completed && "line-through"}`}>{task.task}</p>
          {window.innerWidth > 1024 ? <button className="hidden" ref={del_Btn} onClick={() => delete_Task(task.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
          </button> :
            <button className="" onClick={() => delete_Task(task.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
            </button>
          }
        </div>}

    </>
  )
}

export default Task
