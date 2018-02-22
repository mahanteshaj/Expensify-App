import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
const expenses = [{
    id: '12223',
    description: 'this  is description',
    createdAt: moment(0).add(8,'days'),
    note: 'this is note',
    amount: 1212
    }, 
    {
        id: '12224',
        description: 'this  is second description',
        createdAt: moment(0),
        note: 'this is second note',
        amount: 1312
    },
    {
        id: '12225',
        description: 'this  is third description',
        createdAt: moment(0).add(4,'days'),
        note: 'this is third note',
        amount: 1512
    },

]

test('should filter by text value', () => {
const filters={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined

}
const result=selectExpenses(expenses,filters);

expect(result).toEqual([expenses[0],expenses[2],expenses[1]])
})




 test('should filter by startDate', () => {
    const filters = {
         text: '',
         sortBy: 'date',
         startDate: moment(0),
         endDate: undefined

     }
    const result = selectExpenses(expenses, filters);

     expect(result).toEqual([expenses[0], expenses[2], expenses[1]])
 })
test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate: moment(0).add(4,'days')

    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2], expenses[1]
    ])
})
