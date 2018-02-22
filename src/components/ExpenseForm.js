import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import { fail } from 'assert';
const now = moment()
console.log(now.format('MMM Do,YYYY'))
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false

        }
    }
    onDescriptionChange = (e) => {
        console.log('sada')
        const description = e.target.value;
        this.setState(() => ({

            description: description
        }))

    }
    onAmountChange = (e) => {
        console.log('Amount has been changed!!!')
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
     }
    onNoteChange = (e) => {
        console.log('note has been changed!!!')
        const note = e.target.value;
        this.setState(() => ({
            note

        }))
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
        //this.setState(()=>({createdAt}))

    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))

    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            ///error message 
            this.setState(() => ({

                error: ' Please Provide description and amount'
            }))
        }
        else {
            error: '',
                this.props.onSubmit({
                    description: this.state.description,
                    amount: parseFloat(this.state.amount, 10) * 100,
                    createdAt: this.state.createdAt.valueOf(),
                    note: this.state.note
                })
            console.log('submitted')
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        placeholder="Amount"
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onFocusChange={this.onFocusChange}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for expense here..."
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>AddExpense</button>
                </form>
                {!!this.state.error && <p>{this.state.error}</p>}

            </div>
        )
    }
}