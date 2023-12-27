import img_Background from "./assets/bg-desktop-dark.jpg";
import Nav_Bar from "./Components/Nav_Bar";
import Search_Bar from "./Components/Search_Bar";

const App = () => {
  return (
    <>
      <img src={img_Background} alt="Backgound image" className="fixed z-20" />
      <div className="bg-dark_Blue min-h-full w-full absolute flex justify-center items-center">
        <main className="w-1/3 absolute h-80 m-auto z-30 flex-col flex gap-8">
          <Nav_Bar />
          <Search_Bar />
        </main>
      </div>
    </>
  )
}

export default App
