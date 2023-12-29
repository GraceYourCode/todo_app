import { useRef } from "react";
import { edit, tasks } from "../Store";
import Check from "./Check"

const Search_Bar = ({dark_Mode}) => {
  const task_Text = useRef()

  const checker_Event_Handler = (checkbox, checker, task) => {
    /*
        this function checks if the checkbox is checked or not and then
        displays the next tag(SVG tag) which is hidden by default
        */
        checkbox.current.checked?checker.current.style.display = "block" : checker.current.style.display = "none";
        const new_task = {
          id: tasks.length + 1,
          task: task.current.value
        }
        let new_Tasks = tasks;
        new_Tasks.push(new_task);
        edit(new_Tasks);
        task.current.value = "";
        checkbox.current.checked = false;
        console.log(tasks)
        localStorage.setItem("allTasks", JSON.stringify(tasks))
  }


  return (
    // here is the div container which holds the search bar and checkbox for the task
    <div className={`${dark_Mode?"bg-desaturated_Blue":"bg-light_Grey"} px-6 py-4 rounded flex gap-5 items-center`}>
      <Check dark_mode={dark_Mode} check_Control={checker_Event_Handler} task={task_Text} />
      <input type="text" placeholder="Create a new todo..." ref={task_Text}
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
