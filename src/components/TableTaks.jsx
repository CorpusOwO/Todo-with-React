import React from 'react'
import ButtonStatus from './ButtonStatus'
import Task from './Task'

function TableTaks({tasks, createTask}) {
    if (tasks.length === 0) {
        return (
        <div className='flex  justify-center p-10 text-white'>
        <h1> Todavia no hay tareas que mostrar </h1>
        </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light table-fixed">
                                <thead
                                    className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4">#</th>
                                        <th scope="col" className=" px-6 py-4">Name</th>
                                        <th scope="col" className=" px-6 py-4">Description</th>
                                        <th scope="col" className=" px-6 py-4">Status</th>
                                        <th scope="col" className=" px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task, index) => (
                                        <Task key={index} task={task} tasks={tasks} createTask={createTask} index={index}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

}

export default TableTaks