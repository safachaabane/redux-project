import {createStore} from 'redux'
import rootReducer from './reducer/Index'
const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,DevTools)
export default store;