import React from 'react'
import { NavLink} from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";


const AdminNavigation = () => {
        let history = useHistory();
        const logout = event => {
            event.preventDefault()
            sessionStorage.removeItem('token')
            history.push("/")
        }
        return (
            <nav className="nav__container--admin">
                        <div className="nav__listItem--admin">
                            <NavLink tag={RouteLink} to="/submissions">Messages</NavLink>
                        </div>
                        <div className="nav__listItem--admin">
                            <NavLink tag={RouteLink} to="/project-editor">Project Editor</NavLink>
                        </div>
                        <div className="nav__listItem--admin">
                            <NavLink tag={RouteLink} to="/resume-editor">Resume Editor</NavLink>
                        </div>
                        <div className="nav__listItem--admin">          
                            <NavLink Link onClick={logout}>Logout</NavLink>
                        </div>
            </nav>
        )
}


export default AdminNavigation;