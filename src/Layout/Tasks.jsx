import { useContext, useEffect, useState } from "react"
import Footer from "../Components/Footer"
import Task from "../Components/Task"
import { tasks } from "../Store"

const Tasks = ({ dark_Mode }) => {
  const { allTasks } = useContext(tasks);

  const delete_Task = (id) => allTasks.filter

  return (
    <div className={`${dark_Mode ? "bg-desaturated_Blue" : "bg-light_Grey"} rounded`}>
      {!allTasks ? null : (
        allTasks.map(task => (
          <Task dark_Mode={dark_Mode} task={task} key={task.id} />
        ))
      )}
      <Footer dark_Mode={dark_Mode} />
    </div>
  )
}

export default Tasks
