import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { Counter } from './features/counter/Counter'

function App() {
  const [tasks, setTasks]= useState([{
    id: 1,
    text:'Doctors Appointment',
    day: 'Febr 5th at 2:30pm',
    Reminder: true,},
    {
        id: 2,
        text:' Meeting at School',
        day: 'Febr 6th at 2:50pm',
        Reminder: true,},
        {
            id: 3,
            text:'Food Shopping',
            day: 'Febr 7th at 1:30pm',
            Reminder: false,}
])
const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
  return (
    <div>
      <Counter />
    <div className="container">
      <Header />
      { tasks.length > 0 ? (<Tasks  tasks={tasks} onDelete ={ deleteTask } />) : (' No Task')}
      {/* <Tasks  tasks={tasks} onDelete ={ deleteTask}/> */}
    </div>
    </div>
  );
}

export default App;
