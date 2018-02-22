import filterReducer from '../../reducers/filters'
import moment from 'moment'
test('should stup default filter value ',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})
test('should set by sortBy to amount',()=>{
    const state=filterReducer(undefined,{
        type:'SORT_BY',
        sortBy:'amount'
    })
    expect(state.sortBy).toBe('amount')
})
 
test('should set start date', () => {
    const currentState = {
        text: '',
        startDate: moment(0).add(5,'days'),
        endDate: undefined,
        sortBy: 'amount',
    }
    const action = { type: 'SET_START_DATE', startDate:moment(0)}
    const state = filterReducer(currentState, action)
    expect(state.startDate).toEqual(moment(0))
})


test('should set end date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: moment(0).add(5, 'days'),
        sortBy: 'amount',
    }
    const action = { type: 'SET_END_DATE', endDate: moment(0) }
    const state = filterReducer(currentState, action)
    expect(state.endDate).toEqual(moment(0))
})
test('should set text', () => {
    const currentState = {
        text: 'some text for default',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    }
    const action = { type: 'SET_TEXT', text:'actualtext' }
    const state = filterReducer(currentState, action)
    expect(state.text).toBe('actualtext')
})

