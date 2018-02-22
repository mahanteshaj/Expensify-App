import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import axios from 'axios'
export default()=>{
    const Store = createStore(
        combineReducers(
            {   
                expenses: expensesReducer,
                filters: filterReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return Store;
}
