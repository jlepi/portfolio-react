import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'


const Listings = () => {
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [listing, setListing] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(process.env.REACT_APP_API + '/contactFormEntries', {
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
    return (
        <Container className="container--adminPage">
            <Row>
                <h2>Messages {user}</h2>
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="6" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.id}</td><td>{entry.name}</td><td>{entry.phoneNumber}</td><td>{entry.email}</td><td>{entry.content}</td><td>{entry.date}</td></tr>)
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Listings