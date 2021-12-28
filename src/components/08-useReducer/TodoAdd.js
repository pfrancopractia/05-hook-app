import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length > 0)
        {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done:false
            };
            const action = {
                type:'add',
                payload: newTodo
            };

            handleAddTodo(newTodo);
            reset();
        }
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    placeholder='Aprender...'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                    value={description}
                />
                <button 
                    className='btn btn-outline-primary form-control mt-1 btn-block'>
                        Agregar
                    </button>
            </form>
        </>
    )
}
