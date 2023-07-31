import { useState } from 'react'
import FormTask from './components/FormTask'
import TableTaks from './components/TableTaks'


function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <div className='bg-neutral-800 w-screen h-screen overflow-hidden'>
      <FormTask createTask={createTask}/>
      <TableTaks tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
