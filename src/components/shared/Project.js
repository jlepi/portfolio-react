import React from 'react'

class Project extends React.Component {
    render() {
        return (
            <React.Fragment>
                <article className="article">
                    <div className="article__text">
                        <h2>Project Title.</h2>
                        <ul className="article__list">
                            <li>Descriptor</li>
                            <li>Descriptor</li>
                            <li>Descriptor</li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis turpis eget ipsum varius laoreet sed vel ex. Pellentesque quis ex laoreet, ultricies elit ac, ultricies nisl. Quisque non sapien sagittis, maximus mi eget, scelerisque odio.
                        </p>
                        <a className="article__link" href="#">See More</a>
                    </div>
                    <div className="article__gallery">
                        <img className="article__image" src="https://via.placeholder.com/1500x1000" alt="Write alt here."/>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}

export default Project;