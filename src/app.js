import expensesReducer from './reducers/expenses'
import filterReducer from './reducers/filters'
import getVisibleExpenses from './selectors/expenses'
import { addExpense, removeExpense, editExpense } from './actions/expenses.js'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from './actions/filters.js'
import  axios from 'axios'

import React from 'react'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import { Provider } from 'react-redux'


const Store = configureStore();
Store.subscribe(() => {
    const state = Store.getState();;
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})


console.log(Store.getState())
//Store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
// Store.dispatch(addExpense({ description: 'WaterBill', amount: 100, createdAt: 1000 }))
// Store.dispatch(addExpense({ description: 'GasBill', amount: 100, createdAt: 1000 }))
// Store.dispatch(addExpense({ description: 'Rent', amount: 1004343, createdAt: 100 }))


const jsx = (
 
    <Provider store={Store}>
     
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
