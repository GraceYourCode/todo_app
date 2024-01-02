import { useContext } from "react"
import { tasks } from "../Store"

const Footer = ({ dark_Mode, items }) => {
  let { filter, setFilter } = useContext(tasks);

  let { allTasks, setAllTasks } = useContext(tasks);

  let { activeTasks, setActiveTasks } = useContext(tasks);

  let { completedTasks, setCompletedTasks } = useContext(tasks);

  const displayAll = () => {
    setFilter(filter = {
      active: false,
      all: true,
      completed: false
    })
  }

  const displayActive = () => {
    setFilter(filter = {
      active: true,
      all: false,
      completed: false
    });
    setActiveTasks(activeTasks = allTasks.filter(task => !task.completed));
  }

  const displayCompleted = () => {
    setFilter(filter = {
      active: false,
      all: false,
      completed: true
    });
    setCompletedTasks(completedTasks = allTasks.filter(task => task.completed))
  }

  const clearCompleted = () => {
    setAllTasks(allTasks = allTasks.filter(task => !task.completed));
    setCompletedTasks(completedTasks = []);
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }

  return (
    <>
      <div className={`${dark_Mode ? "text-dark_Grey_Blue bg-desaturated_Blue" :
        "text-light_Mode_Dark_Grey_Blue bg-light_Grey"} flex justify-between px-3 md:px-4 lg:px-6 items-center text-xs py-4`}>
        <aside>{`${items} items left`}</aside>
        <main className="flex gap-3 portrait:hidden items-center">
          <button className={filter.all ? "text-bright_Blue" : `${dark_Mode ? "hover:text-very_Light_Grey_Blue" :
            "hover:text-light_Mode_Very_Dark_Grey_Blue"}`} onClick={() => displayAll()}>All</button>
          <button className={filter.active ? "text-bright_Blue" : `${dark_Mode ? "hover:text-very_Light_Grey_Blue" :
            "hover:text-light_Mode_Very_Dark_Grey_Blue"}`} onClick={() => displayActive()}>Active</button>
          <button className={filter.completed ? "text-bright_Blue" : `${dark_Mode ? "hover:text-very_Light_Grey_Blue" :
            "hover:text-light_Mode_Very_Dark_Grey_Blue"}`} onClick={() => displayCompleted()}>Completed</button>
        </main>
        <button onClick={() => clearCompleted()} className={`${dark_Mode ? "hover:text-very_Light_Grey_Blue" :
          "hover:text-light_Mode_Very_Dark_Grey_Blue"}`}>Clear completed</button>
      </div>
      <main className={`${dark_Mode ? "text-dark_Grey_Blue bg-desaturated_Blue" : "text-light_Mode_Dark_Grey_Blue bg-light_Grey"} 
      flex gap-3 landscape:hidden justify-center text-xs md:text-sm items-center mt-4 md:mt-5 py-4`}>
        <button className={filter.all ? "text-bright_Blue" : undefined} onClick={() => displayAll()}>All</button>
        <button className={filter.active ? "text-bright_Blue" : undefined} onClick={() => displayActive()}>Active</button>
        <button className={filter.completed ? "text-bright_Blue" : undefined} onClick={() => displayCompleted()}>Completed</button>
      </main>
    </>
  )
}

export default Footer
