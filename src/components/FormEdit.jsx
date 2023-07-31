import React, { useState } from 'react'
import ButtonStatus from './ButtonStatus';

function FormEdit({task, isEdit, updateTask}) {

    const [name, setTaskName] = useState(task.name);
    const [description, setTaskDescription] = useState(task.description);

    const handleTaskName = (e) => {
        setTaskName(e.target.value)
    }

    const handleTaskDescription = (e) => {
        setTaskDescription(e.target.value)
    }

    const handleUpdateTodo = (e) => {
        updateTask(task.id, {
            name: name,
            description: description,
        })
        isEdit(false);
    }

  return (
    <>
        <td className="whitespace-nowrap  px-6 py-4">
        <input type="text" 
        className='bg-neutral-800 border-white rounded-sm border-2 p-1'
        value={name} 
        onChange={handleTaskName} />
        </td>
        <td className="whitespace-nowrap  px-6 py-4">
        <input 
        className='bg-neutral-800 border-white rounded-sm border-2 p-1'
        type="text" 
        value={description} 
        onChange={handleTaskDescription} />
        </td>

        <td>
            <ButtonStatus />
        </td>
        <td className="whitespace-nowrap  px-6 py-4">
        <button type="button" 
            onClick={handleUpdateTodo}
            className="inline-block rounded bg-cyan-700 w-20 h-9 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init data-te-ripple-color="light">
            Update
        </button>
        </td>
    </>
  )
}

export default FormEdit