import { useContext, useRef } from "react";
import Check from "./Check"
import { tasks } from "../Store";

const Search_Bar = ({ dark_Mode }) => {
  const task_Text = useRef()
  let { allTasks, setAllTasks } = useContext(tasks);

  const add_Task = (checkbox, checker, task) => {
    /*
        this function checks if the checkbox is checked or not and then
        displays the next tag(SVG tag) which is hidden by default
        */
    if (task.current.value == "") {
      checkbox.current.checked = false;
      return;
    } else {
      checkbox.current.checked ? checker.current.style.display = "block" : checker.current.style.display = "none";
      const to_UpperCase_Task = task.current.value.slice(0,1).toUpperCase() + task.current.value.slice(1);
      const new_task = {
        id: allTasks.length + 1,
        task: to_UpperCase_Task
      };
      let new_Tasks = [...allTasks, new_task]
      setAllTasks(allTasks = new_Tasks);
      task.current.value = "";
      checkbox.current.checked = false;
      localStorage.setItem("allTasks", JSON.stringify(new_Tasks));
    }
  }


  return (
    // here is the div container which holds the search bar and checkbox for the task
    <div className={`${dark_Mode ? "bg-desaturated_Blue" : "bg-light_Grey"} px-6 py-4 rounded flex gap-5 items-center`}>
      <Check dark_mode={dark_Mode} check_Control={add_Task} task={task_Text} />
      <input type="text" placeholder="Create a new todo..." ref={task_Text}
        /*
         here i want to write an inline styling to remove the default background of this input tag which is 
         white because tailwind css doesn't come with a way of removig backgrounds
        */
        style={{ background: "none" }}
        className="text-dark_Grey_Blue outline-none w-full"
      />
    </div>
  )
}

export default Search_Bar
