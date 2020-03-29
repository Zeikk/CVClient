import React from 'react'

const Desinscription = () => {

    return(
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">Supprimer Compte</h1>
           

                <section className="section">
                    <article className="message is-info">
                        <div className="message-body">
                            En cliquant sur le boutton supprimer, votre compte sera supprimé de l'application.
                            <br/>
                            Tous vos CV et données personnelles seront <strong>effacés</strong>.
                        </div>
                    </article>
                    <div className="has-text-centered">
                        <button className="button is-danger is-rounded is-large-desktop">
                            <span className="icon">
                                <i className="fas fa-trash-alt"></i>
                            </span>
                            <span>| Supprimer le Compte</span>
                        </button>
                    </div>
                </section>
            </section>
        </div>
    
    )
}

export default Desinscription