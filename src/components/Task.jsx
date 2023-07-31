import React, { useState } from 'react'
import ButtonStatus from './ButtonStatus'
import EditButton from './EditButton'
import FormEdit from './FormEdit'

function Task({index,task, createTask, tasks}) {

    const [isEdit, setIsEdit] = useState(false)

    const updateTask = (id, newTask) => {
        tasks.map((task) => {
            task.id === id ? createTask([...tasks, newTask.name, newTask.description]) : ""
        })
    }
    return (
    <tr className="border-b dark:border-neutral-500 text-white"
    key={index}
    >
        <td className="whitespace-nowrap  px-6 py-4 font-medium">{index+1}</td>
        {isEdit ? <FormEdit task={task} isEdit={setIsEdit} updateTask={updateTask} /> : <>  
        <td className="whitespace-nowrap  px-6 py-4">{task.name}</td>
        <td className="whitespace-nowrap  px-6 py-4">{task.description}</td>
        <td className="whitespace-nowrap  px-6 py-4"> <ButtonStatus status={task.status} /> </td>
        <td className="whitespace-nowrap  px-6 py-4"> <EditButton edit={setIsEdit} /> </td>
        </> }
    </tr>
    )
}

export default Task