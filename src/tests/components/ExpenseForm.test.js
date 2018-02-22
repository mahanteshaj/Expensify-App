import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses';
import moment from 'moment'
test('this should render expense form', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {

        }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})
test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'something input'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }

    })
    expect(wrapper.state('description')).toBe(value)
    //  expect(wrapper).
})
test('should set textarea on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'something input'
    wrapper.find('textarea').simulate('change', {
        target: { value }

    })
    expect(wrapper.state('note')).toBe(value)
    //  expect(wrapper).
})

test('should set the amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "25.34" 
    wrapper.find('input').at(1).simulate('change', {
        target: { value }

    })
    expect(wrapper.state('amount')).toBe(value)

})
test('should set the amount if  input is not valid', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "hiuhi"
    wrapper.find('input').at(1).simulate('change', {
        target: { value }

    })
    expect(wrapper.state('amount')).toBe("")

})



test('should call onsubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn()
    //onSubmitSpy('Andrew')
   // expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philadelphia');
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    // const value = "hiuhi"
     wrapper.find('form').at(0).simulate('submit', {
       preventDefault:()=>{ }
     })
     expect(wrapper.state('error')).toBe("")
     expect(onSubmitSpy).toHaveBeenLastCalledWith({
         description:expenses[0].description
         ,amount:expenses[0].amount,
         note:expenses[0].note,
         createdAt:expenses[0].createdAt.valueOf()
     })
})

 

test('should set new date on date change',()=>{
    const  wrapper=shallow(<ExpenseForm/>)
    const now=moment()
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now)

})



test('should set new date on date focus',()=>{
    const wrapper = shallow(<ExpenseForm />)
    const now = true
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused:now});
    expect(wrapper.state('calendarFocused')).toBe(now)

})
