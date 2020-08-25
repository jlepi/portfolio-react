import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAuthenticated from '../../helpers/authHelper'

const PrivateRoute = ({ children, ...rest}) => {
    return (
        <div className="container--flex">
            <Route
            {...rest}
            render={({ location }) => isAuthenticated() ? 
                (children) : 
                ( <Redirect to={{pathname: "/login", state: {from: location}}} /> )
            }
            />
        </div>
    )
}

export default PrivateRoute
