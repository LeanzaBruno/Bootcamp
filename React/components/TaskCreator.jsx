import { useState } from "react";

export default function TaskCreator({onNewTask}){
    const [description, setDescription] = useState('');

    return(
		<div className='row input-group my-3'>
			<input type='text'
                    placeholder='Descripción de la nueva tarea'
                    className='col form-control'
                    value={ description }
                    onChange={ e => setDescription(e.target.value) }/>
			<button type='button'
                    className='col-2 btn btn-primary'
                    onClick={ onNewTask(description) }>Agregar tarea</button>
		</div>
    )
}
