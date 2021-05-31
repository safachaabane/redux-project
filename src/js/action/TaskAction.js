import {ADD_TASK,DELETE,EDIT_TASK,TOGGLE_COMPLETE} from '../types/Index'

export const addTask = (payload) =>{
    return{
        type:ADD_TASK,
        payload
    }
}
export const editTask = (id,value) =>({
    type:EDIT_TASK,
    payload:{id,value}
})
export const complete = (payload) =>({
    type:TOGGLE_COMPLETE,
    payload
})
export const deleteTask = (payload) =>({
    type:DELETE,
    payload
})