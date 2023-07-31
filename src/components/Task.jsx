import React, { useState } from 'react'
import ButtonStatus from './ButtonStatus'
import EditButton from './EditButton'
import FormEdit from './FormEdit'
import DeleteButton from './DeleteButton'

function Task({index,task, updateTask, deleteTask}) {

    const [isEdit, setIsEdit] = useState(false)


    return (
    <tr className="border-b dark:border-neutral-500 text-white"
    key={index}
    >
        <td className="whitespace-nowrap  px-6 py-4 font-medium">{index+1}</td>
        {isEdit ? <FormEdit task={task} isEdit={setIsEdit} id={index} updateTask={updateTask} /> : <>  
        <td className="whitespace-nowrap  px-6 py-4">{task.name}</td>
        <td className="whitespace-nowrap  px-6 py-4">{task.description}</td>
        <td className="whitespace-nowrap  px-6 py-4"> <ButtonStatus status={task.status} /> </td>
        <td className="whitespace-nowrap  px-6 py-4"> <EditButton edit={setIsEdit} /> <DeleteButton deleteTask={deleteTask} id={index} /> </td>
        </> }
    </tr>
    )
}

export default Task