import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListItem} from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

import {connect} from 'react-redux'
test('test should render with an expense list item',()=>{
  const   wrapper=shallow(<ExpenseListItem 
    { ...expenses[0]
    }/>)
  expect(wrapper).toMatchSnapshot();
})