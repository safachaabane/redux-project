import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

function TaskList() {
    const taskList = useSelector(state => state.TaskReducer.taskList)
    return (
        <div>
            {
          taskList.map(todo =><TaskItem todo={todo} key={todo.id}/>)  
            }
        </div>
    )
}

export default TaskList
