import React from 'react'
import ContactForm from '../shared/ContactForm'

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="section--contact" id="contact">
                    <div className="section__block section__block--contact">
                        <div className="section__text--form">
                            <h2>Contact Me.</h2>
                            <ul>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        <div className="section__form">
                        <ContactForm />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contact;