import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

//si se recarga el componente o la pagina web, se obtienen los ToDos del localStorage 
// y se inicializa el Reducer con eso 
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    

    //cada vez que los ToDos cambian se guarda la coleccion en el localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    //console.log(description);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload: newTodo
        });
    }


    const handleDelete = (todo) => {
        
        const action = {
            type:'delete',
            payload: todo
        };

        dispatch(action);
    }

    const handleToggle = (todo) => {
        
        const action = {
            type:'toggle',
            payload: todo
        };

        dispatch(action);
    }

    return (
        <div>
            <h1>Todo App ({todos.length}) </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} />
                </div>
                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo={handleAddTodo} />
                </div>
            </div>
            
            
        </div>
    )
}
