export default function TaskItem({task, onDelete}){
    return (
        <li className='list-group-item d-flex justify-content-between'>
            {task.description}
            <button type='button' className="btn-close btn-close-white" onClick={ onDelete(task.id) }/>
        </li>
    );
}