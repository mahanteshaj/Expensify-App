import React from 'react'
import { connect } from 'react-redux'
import filters from '../reducers/filters';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (<p>No expenses</p>) : (props.expenses.map((eachExpense) =>

                <ExpenseListItem key={eachExpense.id}{...eachExpense} />
            ))
        }
         </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        //filters:state.filters
    };
}
export default connect(mapStateToProps)(ExpenseList)