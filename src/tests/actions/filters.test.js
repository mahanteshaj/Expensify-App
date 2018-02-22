import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters'
import moment from 'moment'
test('setStartDate by default',()=>{
    const action=setStartDate();
    expect({startDate:undefined,type:'SET_START_DATE'}).toEqual(action)
})

test('setStartDate by with some value', () => {
    const action = setStartDate(moment(0));
    expect({ startDate:moment(0), type: 'SET_START_DATE' }).toEqual(action)
})

test('setEndtDate by with some value', () => {
    const action = setEndDate(moment(0));
    expect({ endDate: moment(0), type: 'SET_END_DATE' }).toEqual(action)
})

test('setEndtDate by with Default value', () => {
    const action = setEndDate();
    expect({ endDate:undefined, type: 'SET_END_DATE' }).toEqual(action)
})


test('setTextFilter by with some text', () => {
    const action = setTextFilter('abcd');
    expect({ text: 'abcd', type: 'SET_TEXT' }).toEqual(action)
})

test('setTextFilter by with some default text', () => {
    const action = setTextFilter();
    expect({ text: '', type: 'SET_TEXT' }).toEqual(action)
})


test('setsortByDateFilter ', () => {
    const action = sortByDate();
    expect({ sortBy: 'date', type: 'SORT_BY' }).toEqual(action)
})

test('setsortByAmountFilter ', () => {
    const action = sortByAmount();
    expect({ sortBy: 'amount', type: 'SORT_BY' }).toEqual(action)
})




