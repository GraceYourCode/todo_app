import { useEffect } from "react"
import Footer from "../Components/Footer"
import Task from "../Components/Task"
import { tasks } from "../Store"

const Tasks = ({dark_Mode}) => {
  return (
    <div className={`${dark_Mode?"bg-desaturated_Blue":"bg-light_Grey"} rounded`}>
      {tasks.map(task => (
        <Task dark_Mode={dark_Mode} task={task} key={task.id} />
      ))}
      <Footer dark_Mode={dark_Mode} />
    </div>
  )
}

export default Tasks
