import { useContext, useEffect, useState } from "react";
import dark_Mode_Desktop_Background from "./assets/bg-desktop-dark.jpg";
import light_Mode_Desktop_Background from "./assets/bg-desktop-light.jpg";
import dark_Mode_Mobile_Background from "./assets/bg-mobile-dark.jpg";
import light_Mode_Mobile_Background from "./assets/bg-mobile-light.jpg";
import Nav_Bar from "./Components/Nav_Bar";
import Search_Bar from "./Components/Search_Bar";
import Tasks from "./Layout/Tasks";
import { tasks } from "./Store";

const App = () => {
  let [dark_Mode, setDark_Mode] = useState(false);

  /*
    this alltasks is a declaration of all the tasks collected from the context of the todo
    app in ./store/js. It's the container for all the tasks
   */
  let [allTasks, setAllTasks] = useState([
    { id: 1, task: "Get started with your todo app", completed: false }
  ]);

  let [filter, setFilter] = useState({
    all: true,
    completed: false,
    active: false
  });

  let [activeTasks, setActiveTasks] = useState("");

  let [completedTasks, setCompletedTasks] = useState();

  const [add_Task, setAdd_Task] = useState();

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("allTasks"));
    let colorTheme = JSON.parse(localStorage.getItem("preferred-color-theme"));
    if (!items) {
      return;
    } else setAllTasks(allTasks = items);
    if (colorTheme) {
      setDark_Mode(true);
    } else setDark_Mode(false);
  }, [])

  const toggle_Dark_Mode = () => {
    setDark_Mode(dark_Mode = !dark_Mode);
    localStorage.setItem("preferred-color-theme", JSON.stringify(dark_Mode));
  }

  return (
    <tasks.Provider value={{ allTasks, setAllTasks, filter, setFilter, activeTasks, setActiveTasks, completedTasks, setCompletedTasks, add_Task, setAdd_Task }}>
        <img src={dark_Mode ? dark_Mode_Desktop_Background : light_Mode_Desktop_Background} alt="Backgound image" className="fixed z-20 w-full 2md:block hidden" />
        <img src={dark_Mode ? dark_Mode_Mobile_Background : light_Mode_Mobile_Background} alt="Backgound image" className="fixed z-20 w-full 2md:hidden" />
        <div className={`${dark_Mode ? "bg-dark_Blue" : "bg-very_Light_Grey_Blue"} min-h-full w-full absolute flex justify-center items-center font-primary`}>
          <main className="2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-2/3 sm:w-3/4 w-5/6 z-30 flex-col flex xl:gap-8 lg:gap-6 md:gap-5 gap-4 py-10">
            <Nav_Bar dark_Mode={dark_Mode} setTheme={() => toggle_Dark_Mode()} />
            <Search_Bar dark_Mode={dark_Mode} />
            <Tasks dark_Mode={dark_Mode} />
            <p className={`text-center text-xs ${dark_Mode ? "text-dark_Grey_Blue" : "text-light_Mode_Dark_Grey_Blue"}`}>Drag and drop to reorder list</p>
          </main>
        </div>
    </tasks.Provider>
  )
}

export default App
