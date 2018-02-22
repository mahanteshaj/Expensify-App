import React from 'react'
import {shallow} from 'enzyme'
import { AddExpenseEditPage } from '../../components/AddExpenseEditPage'
import expenses from '../fixtures/expenses'

let editExpense,history,wrapper,removeExpense
beforeEach(() => {
    editExpense = jest.fn()
    removeExpense=jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <AddExpenseEditPage
            editExpense={editExpense}
            expense={expenses[1]}
            history={history}
            removeExpense={removeExpense}
        />
    )
})
test('test for the adding EXpense page', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should handll edit page with valid input', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({
        id:expenses[1].id,
        description:'sdsd',
        amount:expenses[1].amount,
        note:expenses[1].note
    })
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
})
test('should handll remove with valid input', () => {
    wrapper.find('button').prop('onClick')(expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
})
