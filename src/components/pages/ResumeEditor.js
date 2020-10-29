import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'
import { useHistory, useLocation } from "react-router-dom";


const ResumeEditor = () => {
    let history = useHistory();
    let location = useLocation();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [listing, setListing] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(process.env.REACT_APP_API + '/resume', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])
    
const reRoute = () => {
    let { from } = location.state || { from: { pathname: "/resume-create" } };
    history.replace(from);
}    

const reRouteUpdate = () => {
    let { from } = location.state || { from: { pathname: "/resume-update" } };
    history.replace(from);
}
    
    return (
        <Container className="container--adminPage">
            <Row>
                <h2>Resume Editor {user}</h2>
            </Row>
            <Button onClick={reRoute} color="primary">Add Resume Entry</Button>
            <Table responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="7" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.id}</td><td>{entry.category}</td><td>{entry.location}</td><td>{entry.title}</td><td>{entry.description}</td><td>{entry.startDate}</td><td>{entry.endDate}</td><td><Button onClick={reRouteUpdate} color="primary">Edit</Button></td><td><Button color="primary">Delete</Button></td></tr>)
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ResumeEditor