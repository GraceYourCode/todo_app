import { useContext, useEffect, useState } from "react"
import Footer from "../Components/Footer"
import Task from "../Components/Task"
import { tasks } from "../Store"

const Tasks = ({ dark_Mode }) => {
  let { allTasks, setAllTasks } = useContext(tasks);

  let { activeTasks, setActiveTasks } = useContext(tasks);

  let { completedTasks, setCompletedTasks } = useContext(tasks);

  let { filter } = useContext(tasks);

  const delete_Task = (id) => {
    setAllTasks(allTasks = allTasks.filter(task => task.id != id));
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
    filter.active && setActiveTasks(activeTasks = activeTasks.filter(task => task.id != id));
    filter.completed && setCompletedTasks(completedTasks = completedTasks.filter(task => task.id != id));
    console.log(allTasks.length == 0)
  }

  return (
    <div className={`rounded`}>
      {filter.all ? allTasks.map(task => (<>
        <Task dark_Mode={dark_Mode} task={task} key={task.id} delete_Task={delete_Task} /></>
      )) : filter.active ? activeTasks.map(task => (
        <Task dark_Mode={dark_Mode} task={task} key={task.id} delete_Task={delete_Task} />
      )) : completedTasks.map(task => (
        <Task dark_Mode={dark_Mode} task={task} key={task.id} delete_Task={delete_Task} />
      ))
      }
      <Footer dark_Mode={dark_Mode} items={
        filter.all ? allTasks.length : filter.active ? activeTasks.length : completedTasks.length
      } />
    </div>
  )
}

export default Tasks
