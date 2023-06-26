import TaskItem from './TaskItem';

export default function TaskList({list, onDelete}){
    return (
      <div className='row my-3'>
        {list.length > 0 ? 
          <ul className='list-group'>
            {list.map( task => <TaskItem key={task.id} task={task} onDelete={onDelete}/>) }
          </ul>
          : <h1 className='col text-center'>No hay tareas</h1>
        }
      </div>
    );
}