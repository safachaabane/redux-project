import {ADD_TASK,DELETE,EDIT_TASK,TOGGLE_COMPLETE} from "../types/Index"
const initialState = {
    taskList: [
        {
          id: 0,
          task: "Learn HTML And CSS",
          isDone: true,
        },
        {
          id: 1,
          task: "Learn JS and ES6",
          isDone: true,
        },
        {
          id: 2,
          task: "Learn python and djando",
          isDone: false,
        },
      ],
    };
const TaskReducer = (state=initialState,{type,payload}) => {
    switch (type){
    case ADD_TASK :
         return {...state,taskList:[...state.taskList,payload]};
    case DELETE :
        return {...state,
            taskList:state.taskList.filter((todo)=> todo.id!==payload),};
            case EDIT_TASK:
                return {
                  ...state,
                  taskList: state.taskList.map((todo) =>
                    todo.id === payload.id ? { ...todo, task: payload.value } : todo
                  ),
                };
                case TOGGLE_COMPLETE:
                  return {
                    ...state,
                    taskList: state.taskList.map((todo) =>
                      todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
                    ),
                  };
            
        default:
            return state;
}};
export default TaskReducer;