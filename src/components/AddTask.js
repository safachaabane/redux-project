import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../js/action/TaskAction';

function AddTask() {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const add = () => {
        if(text){
            dispatch(addTask({id:Math.random(),task:text.trim(),isDone: false}))
            setText("")
        }
        else
        alert("field,shoudn't be empty")
        
    }
    
    return (
        <div className="add">
            <input type="text" onChange={e=>setText(e.target.value)} value={text}/>
            <button onClick={add}>AddTask</button>
        </div>
    )
}

export default AddTask;