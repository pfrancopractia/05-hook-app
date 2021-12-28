import React from 'react';

export const TodoListItem = ( {todo, i, handleDelete, handleToggle}) => {
    return (
        <li
        key={ todo.id }
        className='list-group-item'
        >
            <input type="checkbox" 
                key={todo.id}
                onChange={()=>{handleToggle(todo)}}
                checked={todo.done}
            />

            <p className='text-center'> {i+1}. { todo.desc }</p>
            <button 
                onClick={()=>{handleDelete(todo)}}
                className='btn btn-danger'
            >Borrar</button>
        </li>
    )
}
