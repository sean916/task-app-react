import React, { Component } from "react"

function Overview(props) {

    const { tasks, handleDelete } = props;

    return (
        <div className='container'>
           <ul>
               {tasks.map((task) => {
                   let buttonKey = task.id + 1;
                   return (
                        <li key={task.id}>
                            {task.count}: {task.text}
                            <button key={buttonKey} onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                   )
               })}
           </ul>
        </div>
    )
}

export default Overview;