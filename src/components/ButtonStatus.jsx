import React from 'react'
import { useState } from 'react';
function ButtonStatus({statusTask}) {
    const [status, setStatus] = useState(false);

    const toogleStatus = (status) => setStatus(status ? false : true);


  return (
    <button className={status ? "bg-green-500 text-white w-20 h-9 rounded-sm" : "bg-red-500 text-white w-20 h-9 rounded-sm"}
    onClick={() => toogleStatus(status)} > 
    {status ? "Completada" : "Incompleta"} 
    </button>
  )
}

export default ButtonStatus