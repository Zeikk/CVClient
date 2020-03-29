import React from 'react'

const MDP = ({user}) => {

    return(
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">Mot de Passe</h1>
           

                <section className="section">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Mot de passe Actuel</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="**********" value={user.password}/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Nouveau mot de passe</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="**********"/>
                                    </div>
                                    <p className="help">Minimun 7 caractères</p>
                                </div>

                                <div className="field">
                                    <label className="label">Confirmer le nouveau mot de passe</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="**********"/>
                                    </div>
                                    <p className="help">Minimun 7 caractères</p>
                                </div>
                                <br/>
                                <div className="field is-grouped is-hidden-touch">
                                    <div className="control">
                                        <button className="button is-danger is-rounded">Annuler</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary is-rounded">Sauvegarder le Mot de Passe</button>
                                    </div>
                                </div>
                                <div className="is-hidden-desktop">
                                    <div className="control">
                                        <button className="button is-danger is-rounded">Annuler</button>
                                    </div>
                                    <br/>
                                    <div className="control">
                                        <button className="button is-primary is-rounded">Sauvegarder le Mot de Passe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </section>
        </div>
    )
}

export default MDP