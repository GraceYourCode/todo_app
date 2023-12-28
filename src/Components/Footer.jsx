const Footer = ({dark_Mode}) => {
  return (
    <div className={`${dark_Mode?"bg-desaturated_Blue text-dark_Grey_Blue":"bg-light_Grey text-light_Mode_Dark_Grey_Blue"} flex justify-between px-6 items-center text-xs py-4`}>
      <aside>5 items left</aside>
      <main className="flex gap-3 items-center">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </main>
      <button>Clear completed</button>
    </div>
  )
}

export default Footer
