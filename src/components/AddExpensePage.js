import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //  props.dispatch(addExpense(expense))
        this.props.addExpense(expense)
        this.props.history.push('/')
        console.log(expense)
    }
    render() {
        return (
            <div>
                This is form AddExpensePage component
            <h1>Expense Form</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )

    }


}
const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => {
            dispatch(addExpense(expense))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);