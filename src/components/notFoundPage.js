import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const notFoundPage = () => (
    <div>
        Page Not found-<Link to="/">Go Home</Link>
    </div>
)
export default notFoundPage;