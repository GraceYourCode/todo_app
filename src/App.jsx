import { useState } from "react";
import dark_Mode_Background from "./assets/bg-desktop-dark.jpg";
import light_Mode_Background from "./assets/bg-desktop-light.jpg";
import Nav_Bar from "./Components/Nav_Bar";
import Search_Bar from "./Components/Search_Bar";
import Tasks from "./Layout/Tasks";

const App = () => {
  const [dark_Mode, setDark_Mode] = useState(false);

  const toggle_Dark_Mode = () => setDark_Mode(!dark_Mode);

  return (
    <>
      <img src={dark_Mode?dark_Mode_Background:light_Mode_Background} alt="Backgound image" className="fixed z-20" />
      <div className={`${dark_Mode?"bg-dark_Blue":"bg-very_Light_Grey_Blue"} min-h-full w-full absolute flex justify-center items-center font-primary`}>
        <main className="w-1/3 z-30 flex-col flex gap-8">
          <Nav_Bar dark_Mode={dark_Mode} setTheme={()=>toggle_Dark_Mode()} />
          <Search_Bar dark_Mode={dark_Mode} />
          <Tasks dark_Mode={dark_Mode} />
          <p className={`text-center text-xs ${dark_Mode?"text-dark_Grey_Blue":"text-light_Mode_Dark_Grey_Blue"}`}>Drag and drop to reorder list</p>
        </main>
      </div>
    </>
  )
}

export default App
