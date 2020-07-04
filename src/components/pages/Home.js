import React from 'react'
//import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import About from './About'
import Contact from './Contact'
import Project from '../shared/Project'

class Home extends React.Component {
    render () {
        return(
            <React.Fragment>
            <header className="header">
                <div className="header__block">
                    <div className="header__text">
                        <h1>Hi, I'm Joanna.</h1>
                        <h3>
                            I'm a designer + developer from Toronto.
                        </h3>
                    </div>
                    <div className="header__gallery">
                        <img className="header__gallery--image" src="https://via.placeholder.com/1500x1500" alt="Intro"/>
                    </div>
                </div>        
            </header>
            <main id="projects">
                <Project />
                <Project />
                <Project />
                <Project />
            </main>
            <About />
            <Contact />
            </React.Fragment>
        )
    }
}

export default Home;