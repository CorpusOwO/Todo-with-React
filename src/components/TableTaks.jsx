import React from 'react'
import ButtonStatus from './ButtonStatus'

function TableTaks({tasks}) {
return (
<div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                    <thead
                        className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <tr>
                            <th scope="col" className=" px-6 py-4">#</th>
                            <th scope="col" className=" px-6 py-4">Name</th>
                            <th scope="col" className=" px-6 py-4">Description</th>
                            <th scope="col" className=" px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                        <tr className="border-b dark:border-neutral-500 text-white"
                        key={index}
                        >
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">{index+1}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{task.name}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{task.description}</td>
                            <td className="whitespace-nowrap  px-6 py-4"> <ButtonStatus status={task.status} /> </td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
)
}

export default TableTaks