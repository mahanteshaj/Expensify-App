import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ExepenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';
export class AddExpenseEditPage extends React.Component {
    onSubmit = (expense) => {
        // console.log('updated', expense);
        // console.log('sdsd', this.props)
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')

    }
    onRemove = (expense) => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExepenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />

                <button onClick={this.onRemove}>Remove </button>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => {
            dispatch(editExpense(id, expense))
        },

        removeExpense: (id) => {
            dispatch(removeExpense(id))
        },
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseEditPage);