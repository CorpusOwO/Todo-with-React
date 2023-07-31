import React from 'react'

function DeleteButton({deleteTask, id}) {
  return (
    <button className="bg-red-500 text-white w-20 h-9 rounded-sm"
    onClick={() => {
    deleteTask(id)}}
    >
        Delete
    </button>
  )
}

export default DeleteButton