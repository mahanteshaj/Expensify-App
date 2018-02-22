import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {removeExpense} from '../actions/expenses'
export const ExpenseListItem=(props)=>(
    <div>
        <NavLink to={`/edit/${props.id}`}>
          <h3>{props.description}</h3>
        </NavLink>
       
    <p>{props.amount} -  {props.createdAt}
    </p> 
    </div>
)
export default connect()(ExpenseListItem)