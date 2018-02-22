import axios from 'axios'
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

     
    switch (action.type) {
        case 'ADD_EXPENSE': console.log({...action.expense})
        fetch('http://localhost:8080/expensify', { method: 'POST' , headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(
        action.expense
        )
        })
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            fetch('http://localhost:8080/expensify/'+action.expense.id,{method:'DELETE'})
            return state.filter(({ id }) => id !== action.expense.id)
        
        case 'EDIT_EXPENSE': fetch('http://localhost:8080/expensify/' + action.id, {
            method: 'PUT', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(
                action.updates
            )
        })
                
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }

                }
                else {
                    return expense
                }
            })
         case 'SORT_BY_AMOUNT': 
                state.sort(function (action1, action2) {
            return action1.amount - action2.amount;

        })
        default:
            return state

    }
}
export default expensesReducer;