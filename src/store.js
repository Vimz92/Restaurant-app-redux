import { createStore } from "redux";
import reducers from './redux/reducers/main'

const store = createStore(
    
    reducers
)

export default store;