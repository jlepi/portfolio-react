import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'
import { useHistory, useLocation } from "react-router-dom";


const ProjectEditor = () => {
    let history = useHistory();
    let location = useLocation();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [listing, setListing] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(process.env.REACT_APP_API + '/projects', {
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
        let { from } = location.state || { from: { pathname: "/project-create" } };
        history.replace(from);
    }    

const reRouteUpdate = () => {
        let { from } = location.state || { from: { pathname: "/project-update" } };
        history.replace(from);
    }
    
    return (
        <Container className="container--adminPage">
            <Row>
                <h2>Project Editor {user}</h2>
            </Row>
            <Button onClick={reRoute} color="primary">Add Project Entry</Button>
            <Table responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Keyword 1</th>
                    <th>Keyword 2</th>
                    <th>Keyword 3</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="8" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.id}</td><td>{entry.title}</td><td>{entry.keyword1}</td><td>{entry.keyword2}</td><td>{entry.keyword3}</td><td>{entry.description}</td><td>{entry.link}</td><td>{entry.image}</td><td><Button onClick={reRouteUpdate} color="primary">Edit</Button></td><td><Button color="primary">Delete</Button></td></tr>)
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ProjectEditor