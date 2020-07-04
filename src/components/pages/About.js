import React from 'react'
//import { Container, Row, Col, Button } from 'reactstrap'

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="section--about" id="about">
                    <div className="section__block section__block--about">
                        <div className="section__text">
                            <h2>About Me.</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus aliquid nulla aspernatur voluptates possimus error, eaque nobis, ab vel impedit facilis! Aperiam fuga, accusantium enim magni ad ipsa sit libero. (Resume info somewhere in this section).
                            </p>
                        </div>
                        <div className="section__gallery">
                            <img src="https://via.placeholder.com/300x200" alt=""/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About