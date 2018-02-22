import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    })
    expect(state).toEqual([]);
})
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: { id: expenses[1].id }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses
    [2]])
})
test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: { id: '-1' }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
test('should add expense ', () => {
    const expense = {
        description: 'sdadas',
        note: 'note something',
        amount: 3232,
        createdAt: moment(0),
        id: 'first id',
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})
test('should edit expense ', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'this description has been updated',
            note: 'note something',
            amount: 3232,
            createdAt: moment(0),
            id: 'first id',
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe("this description has been updated")
})
test('should  not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'this description should not  updated',
            note: 'note something',
            amount: 3232,
            createdAt: moment(0),
            id: 'first id',
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe('this  is description')
})
