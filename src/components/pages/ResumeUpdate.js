import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container} from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom";


const ResumeUpdate = () => {
    let history = useHistory();
    let ulocation = useLocation();
    
    const token = sessionStorage.getItem('token')

    const [id, setId] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch(process.env.REACT_APP_API + '/resume/:id', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({id, category, location, title, description, startDate, endDate})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid}`)
        } else {
            alert(`Success! Project has been created.`)
            let { from } = ulocation.state || { from: { pathname: "/resume-editor" } };
            history.replace(from);
        }
    }

    return (
        <Container>
            <h3>Edit Resume Entry</h3>
            <Form className="my-5" onSubmit={formSubmit}>
                <FormGroup row>
                    <Label for="id" sm={2}>Which resume entry do you wish to edit?</Label>
                    <Col sm={10}>
                    <Input type="number" name="id" id="id" placeholder="Enter id"  required value={id} onChange={e => setId(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="category" sm={2}>Category</Label>
                    <Col sm={10}>
                    <Input type="text" name="category" id="category" placeholder="Enter category" required value={category} onChange={e => setCategory(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="location" sm={2}>Location</Label>
                    <Col sm={10}>
                    <Input type="text" name="location" id="location" placeholder="Enter location" required value={location} onChange={e => setLocation(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                    <Input type="text" name="title" id="title" placeholder="Enter title"  required value={title} onChange={e => setTitle(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="description" id="description" placeholder="Enter description" required value={description} onChange={e => setDescription(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="startDate" sm={2}>Start Date</Label>
                    <Col sm={10}>
                    <Input type="date" name="startDate" id="startDate" placeholder="Choose date" required value={startDate} onChange={e => setStartDate(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="endDate" sm={2}>End Date (Optional)</Label>
                    <Col sm={10}>
                    <Input type="date" name="endDate" id="endDate" placeholder="Choose date (Optional)" required value={endDate} onChange={e => setEndDate(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button color="success">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      )
    }

    export default ResumeUpdate;