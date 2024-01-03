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
  }

  return (
    <div className={`rounded`}>
      {filter.all ? allTasks.length == 0 ? <p className={`text-center text-xs md:text-sm px-3 md:px-4 lg:px-6 py-4 mb-0.5
      ${dark_Mode ? "text-light_Grey_Blue bg-desaturated_Blue" : "text-light_Mode_Very_Dark_Grey_Blue bg-light_Grey"}`}>
        No tasks to show</p> :
        allTasks.map(task => (<>
          <Task dark_Mode={dark_Mode} task={task} key={task.id} delete_Task={delete_Task} /></>
        )) : filter.active ? activeTasks.length == 0 ? <p className={`text-center text-xs md:text-sm px-3 md:px-4 lg:px-6 py-4 mb-0.5
      ${dark_Mode ? "text-light_Grey_Blue bg-desaturated_Blue" : "text-light_Mode_Very_Dark_Grey_Blue bg-light_Grey"}`}>
          No tasks to show</p> :
          activeTasks.map(task => (
            <Task dark_Mode={dark_Mode} task={task} key={task.id} delete_Task={delete_Task} />
          )) : completedTasks.length == 0 ? <p className={`text-center text-xs md:text-sm px-3 md:px-4 lg:px-6 py-4 mb-0.5
          ${dark_Mode ? "text-light_Grey_Blue bg-desaturated_Blue" : "text-light_Mode_Very_Dark_Grey_Blue bg-light_Grey"}`}>
            No tasks to show</p> :
        completedTasks.map(task => (
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
