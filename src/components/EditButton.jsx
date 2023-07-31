import React from 'react'

function EditButton({edit}) {
    return (
        <button className="bg-cyan-500 text-white w-20 h-9 rounded-sm"
        onClick={edit}
        >
            Edit
        </button>
    )
}

export default EditButton