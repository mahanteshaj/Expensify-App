import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: { id: 'abc123' }
    })
})

test('shuold setup edit expense action object', () => {
    const action = editExpense('abc123', { 'note': 'hi this is updated note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            'note': 'hi this is updated note'
        }
    })

})

test('should setup addExpense action object', () => {
    const ExpenseData = {
        description: 'Some Description',
        note: 'this is new note here',
        amount: 330,
        createdAt: 2323232
    }
    expect(addExpense(ExpenseData)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...ExpenseData
        }
    })
})


test('should setup addExpense  action object with default values', () => {
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})