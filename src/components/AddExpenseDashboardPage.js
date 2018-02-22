import React from 'react'
import ExpenseList from './ExpenseList.js'
import ExpenseListItem from './ExpenseListItem.js';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseListFilters from './ExpenseListFilters'
export const ExpenseDashboardPage = () => (<div>
    This is from dashboard component
    <ExpenseListFilters/>
    <ExpenseList />
    <ExpenseListItem/>

</div>
)
export default ExpenseDashboardPage;