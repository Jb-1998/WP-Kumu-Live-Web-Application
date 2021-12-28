import { createStore } from 'redux'
import rootReducer from '../models/root-reducer'

const store = createStore(rootReducer)
export default store;