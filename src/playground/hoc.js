//Higher Order Component
import React from 'react'
import ReactDOM from 'react-dom'
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is {props.info}</p>
    </div>
)
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please dont share</p>}
            <WrappedComponent{...props} />
        </div>
    )
}
const requireAuthentication = (AuthenticationContent) => {
    return (props) => (
        <div>
            {props.isAuthenticated &&<div><p>Your Authenticated...  </p>
            <AuthenticationContent{...props}/></div>
            }
            {!props.isAuthenticated&&<p>Your Not Authenticated</p>}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAdmin={false} isAuthenticated={true} info="Threre are the details" />, document.getElementById('app'))
