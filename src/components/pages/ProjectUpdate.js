import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container} from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom";


const ProjectUpdate = () => {
    let history = useHistory();
    let location = useLocation();
    
    const token = sessionStorage.getItem('token')

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [keyword1, setKeyword1] = useState("")
    const [keyword2, setKeyword2] = useState("")
    const [keyword3, setKeyword3] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch(process.env.REACT_APP_API + '/projects/:id', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({id, title, keyword1, keyword2, keyword3, description, link, image})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid}`)
        } else {
            alert(`Success! Project has been created.`)
            let { from } = location.state || { from: { pathname: "/project-editor" } };
            history.replace(from);
        }
    }

    return (
        <Container>
            <h3>Edit Project Entry</h3>
            <Form className="my-5" onSubmit={formSubmit}>
                <FormGroup row>
                    <Label for="id" sm={2}>Which project do you wish to edit?</Label>
                    <Col sm={10}>
                    <Input type="number" name="id" id="id" placeholder="Enter id"  required value={id} onChange={e => setId(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                    <Input type="text" name="title" id="title" placeholder="Enter title"  required value={title} onChange={e => setTitle(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="keyword1" sm={2}>Keyword 1 (optional)</Label>
                    <Col sm={10}>
                    <Input type="text" name="keyword1" id="keyword1" placeholder="Enter keyword (optional)" value={keyword1} onChange={e => setKeyword1(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="keyword2" sm={2}>Keyword 2 (optional)</Label>
                    <Col sm={10}>
                    <Input type="text" name="keyword2" id="keyword2" placeholder="Enter keyword (optional)" value={keyword2} onChange={e => setKeyword2(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="keyword3" sm={2}>Keyword 3 (optional)</Label>
                    <Col sm={10}>
                    <Input type="text" name="keyword3" id="keyword3" placeholder="Enter keyword (optional)" value={keyword3} onChange={e => setKeyword3(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="description" id="description" placeholder="Enter description" required value={description} onChange={e => setDescription(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="link" sm={2}>Link</Label>
                    <Col sm={10}>
                    <Input type="text" name="link" id="link" placeholder="Enter link" required value={link} onChange={e => setLink(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="image" sm={2}>Image (just text for now)</Label>
                    <Col sm={10}>
                    <Input type="text" name="image" id="image" placeholder="Enter image file name" required value={image} onChange={e => setImage(e.target.value) }/>
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

    export default ProjectUpdate;