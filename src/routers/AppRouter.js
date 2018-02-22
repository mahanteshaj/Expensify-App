import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import AddExpenseEditPage from '../components/AddExpenseEditPage.js'
import AddExpenseHelpPage from '../components/AddExpenseHelpPage.js'
import AddExpensePage from '../components/AddExpensePage.js'
import ExpenseDashboardPage from '../components/AddExpenseDashboardPage.js'
import notFoundPage from '../components/notFoundPage.js'
import Header from '../components/Header.js'
import {connect} from 'react-redux'
import axios from 'axios'
class AppRouter extends React.Component{

componentDidMount(props){
    axios('http://localhost:8080/expensify', {
        method: 'GET',
    }).then(response => {
        response.data.forEach(element => this.props.expense.push(element))
    
 })

}

render(){return(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} exact={true} />
                <Route path="/edit/:id" component={AddExpenseEditPage}  />
                <Route path="/help" component={AddExpenseHelpPage} exact={true} />
                <Route component={notFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)}
}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses  
      }
}
export default connect(mapStateToProps)(AppRouter);
