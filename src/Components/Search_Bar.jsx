import { useContext, useRef } from "react";
import Check from "./Check"
import { tasks } from "../Store";

const Search_Bar = ({ dark_Mode }) => {
  const task_Text = useRef()
  let { allTasks, setAllTasks } = useContext(tasks);

  let { add_Task, setAdd_Task } = useContext(tasks);

  
    const task_Add = () => { 
    setAdd_Task(add_Task = (checkbox, checker, task) => {
      /*
          this function checks if the checkbox is checked or not and then
          displays the next tag(SVG tag) which is hidden by default
          */
      if (task.current.value == "") {
        checkbox.current.checked = false;
        return;
      } else {
        // checkbox.current.checked ? checker.current.style.display = "block" : checker.current.style.display = "none";
        // console.log(checkbox.current.checked)
        checker.current.style.display = "none"
        const to_UpperCase_Task = task.current.value.slice(0, 1).toUpperCase() + task.current.value.slice(1);
        const new_task = {
          id: Math.floor(Math.random() * 10000),
          task: to_UpperCase_Task,
          completed: false
        };
        let new_Tasks = [...allTasks, new_task]
        setAllTasks(allTasks = new_Tasks);
        task.current.value = "";
        checkbox.current.checked = false;
        localStorage.setItem("allTasks", JSON.stringify(new_Tasks));
      }
    }
    )
    add_Task();
  }

  return (
    // here is the div container which holds the search bar and checkbox for the task
    <div className={`${dark_Mode ? "bg-desaturated_Blue" : "bg-light_Grey"} px-3 md:px-4 lg:px-6 py-4 rounded text-sm flex gap-3.5 lg:gap-5 items-center`}>
      <Check dark_mode={dark_Mode} check_Control={add_Task} task={task_Text} />
      <input type="text" placeholder="Create a new todo..." ref={task_Text}
        /*
         here i want to write an inline styling to remove the default background of this input tag which is 
         white because tailwind css doesn't come with a way of removig backgrounds
        */
        style={{ background: "none" }}
        className={`${dark_Mode ? "text-light_Grey_Blue" : "text-light_Mode_Very_Dark_Grey_Blue"} outline-none w-full`}
      />
    </div>
  )
}

export default Search_Bar
