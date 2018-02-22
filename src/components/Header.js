import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import getRequest from '../HttpRequest/getRequest'
import axios from 'axios'

class Header extends React.Component{ 
    
    // componentDidMount() {
    //      var ret=
    //     console.log(ret)
            
     //console.log(ret[0])


    // componentDidMount(){
    //     getRequest();
    // }
     render(){
        return(
    <header>
        <h1>
            Expensify
        </h1>
        <NavLink to="/" activeClassName="is-active" activeClassName="is-active" exact={true}>Go Home</NavLink>
        <br />
        <NavLink to="/create" activeClassName="is-active" activeClassName="is-active">Create Expense</NavLink>
        <br />
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)}
}
export default Header;