'use client';
import { useState } from 'react'
import './css/styles.css';
import TaskList from './components/TaskList';
import TaskCreator from './components/TaskCreator';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function addTask( taskDescription ){
	setTasks( tasks.concat({id: tasks.length, description: taskDescription}) );
  }

  function deleteTask(id){
	setTasks( tasks.filter( t => t.id != id) );
  }

  return (
    <main className='container h-100'>
		<TaskCreator onNewTask={addTask}/>
		<TaskList list={tasks} onDelete={deleteTask}/>
    </main>
  )
}
