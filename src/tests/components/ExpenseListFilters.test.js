import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

import moment from 'moment'
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate,wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper=shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    />)
})
test('should render  ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should render  ExpenseListFilters with  alt data correctly', () => {
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})
test('should handle the text change correctly',()=>{
   const value='Rent'
   wrapper.find('input').simulate('change',{target:{value}})
    expect(setTextFilter).toHaveBeenLastCalledWith('Rent')
})
test('should sort by date',()=>{
   const value='Date'
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})




test('should handle the Date change correctly', () => {
     const startDate=moment(0)
     const endDate=moment(0).add(4,'days')
     wrapper.find('DateRangePicker').prop('onDatesChange')({  startDate,endDate  })
     expect(setStartDate).toHaveBeenLastCalledWith(startDate)
     expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle the on Date focus change correctly', () => {
    const now=moment()
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe("startDate")
})
test('should handle the on Date focus change correctly', () => {
    const now = moment()
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toEqual("endDate")
})
