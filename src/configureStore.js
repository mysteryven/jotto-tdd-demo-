import { createStore } from 'redux'
import rootReducer from './reducers'

const unConnectStore = createStore(rootReducer)

export default unConnectStore;
