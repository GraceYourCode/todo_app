import Footer from "../Components/Footer"
import Task from "../Components/Task"

const Tasks = ({dark_Mode}) => {
  return (
    <div className={`${dark_Mode?"bg-desaturated_Blue":"bg-light_Grey"} rounded`}>
      <Task dark_Mode={dark_Mode} />
      <Task dark_Mode={dark_Mode} />
      <Task dark_Mode={dark_Mode} />
      <Task dark_Mode={dark_Mode} />
      <Task dark_Mode={dark_Mode} />
      <Footer dark_Mode={dark_Mode} />
    </div>
  )
}

export default Tasks
