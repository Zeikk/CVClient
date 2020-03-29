import React from 'react'

const CV = ({nomCV, dateModif}) => {

    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{nomCV}</p>
                    </div>
                </div>

                <div className="content">
                    <p>Dernière Modificaton: {dateModif}</p>
                </div>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item">
                    <a><span className="icon">
                            <i className="fas fa-download"></i>
                        </span>
                        <span>| Télécharger</span>
                    </a>
                </div>
                <div className="card-footer-item">
                    <a><span className="icon">
                            <i className="fas fa-trash-alt"></i>
                        </span>
                        <span>| Supprimer</span>
                    </a>
                </div>
            </footer>
        </div>
    )
}

const SectionCV = () => {

    return(
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">CV</h1>

                <section className="section">
                    <div className="columns is-centered">
                        <div className="column">
                        <CV
                            nomCV = "CV1"
                            dateModif = "06/03/2020"
                        />
                        </div>
                        <div className="column">
                        <CV
                            nomCV = "CV2"
                            dateModif = "04/03/2020"
                        />
                        </div>
                    </div>
                   
                </section>
            </section>
        </div>
        
    )
}

export default SectionCV