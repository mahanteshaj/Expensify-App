import { createStore, combineReducers } from 'redux'
import { addExpense, removeExpense, editExpense} from '../actions/expenses.js'
import { setStartDate, setEndDate, setTextFilter, sortByDate,sortByAmount } from '../actions/filters.js'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import Store from '../store/configureStore'
import getVisibleExpenses from '../selectors/expenses'
Store.subscribe(() => {
    const state = Store.getState();;
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)
})
const expense1 = Store.dispatch(addExpense({ description: 'Rent', amount: 100,createdAt:10 }))
const expense2 = Store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: 123}))
const expense3 = Store.dispatch(addExpense({ description: 'Rent', amount: 200, createdAt: 137 }))
const expense4 = Store.dispatch(addExpense({ description: 'Rent', amount: 30, createdAt: 157 }))
const expense5 = Store.dispatch(addExpense({ description: 'Rent', amount: 320, createdAt: 147 }))
const expense6 = Store.dispatch(addExpense({ description: 'Rent', amount: 330, createdAt: 167 }))

// const expense2 = Store.dispatch(addExpense({ description: 'Rent', amount: 300 }))

// const expense3 = Store.dispatch(addExpense({ description: 'Rent', amount: 400 }))
// Store.dispatch(removeExpense({ id: expense1.expense.id }))
// Store.dispatch(editExpense(expense2.expense.id, { amount: 2222 }))
Store.dispatch(setTextFilter('rent'))
console.log(Store.dispatch(setStartDate(125)))

Store.dispatch(setEndDate(1245))
//Store.dispatch(setStartDate(0))
//Store.dispatch(setStartDate(100000000000))
// Store.dispatch(setEndDate({ startDate: '23/12/2017' }))
 Store.dispatch(sortByAmount())
// Store.dispatch(sortByDate())
const demoState = {
    expenses: [{
        id: 'sdadad',
        description: 'january Rent',
        note: 'This was the final payment for that address',
        amount: 643200,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount 
        startDate: undefined,
        endDate: undefined

    }
}



// const user = {
//     name: 'jen',
//     age: 43
// }
// console.log({
//     age: 24,
//     ...user,
//     location: 'Jaipur',

// })


