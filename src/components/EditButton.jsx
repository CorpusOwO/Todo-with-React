import React from 'react'

function EditButton({task}) {
    return (
        <button className={status ? "bg-green-500 text-white p-2 rounded-sm" : "bg-red-500 text-white p-2 rounded-sm"}
        onClick={() => toogleStatus(status)} > 
        {status ? "Completada" : "Incompleta"} 
        </button>
    )
}

export default EditButton