/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis Rivat et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import React, { useContext, useState } from 'react'
import {createUser} from '../../../control/actions/typesActions'
import UserContext from '../../../components/UserContext'

const FormulaireCreation = () => {
    
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [mail, setMail] = useState('')
    const [mdp, setMdp] = useState('')
    const [mdp2, setMdp2] = useState('')

    const {
        setLog,
        setId
    } = useContext(UserContext);

    function user (){

        const res = createUser(
            {nom: nom, 
            prenom: prenom, 
            mail: mail, 
            mdp: mdp,
            mdp2: mdp2})
        res.then((value) => {
            localStorage.setItem('login', value.data.login);
            localStorage.setItem('id', value.data.id);
            setLog(value.data.login)
            setId(value.data.id)
            location.assign('/')
        })
    }

    return (
        <>
                <section className="section has-text-centered">
                        <h1 className="title is-2">Créer votre compte</h1>
                </section>
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-3">
                            <div className="field">
                                <label className="label">Nom</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" name="nom" placeholder="Nom" onChange={e => setNom(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="field">
                                <label className="label">Prénom</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" name="prenom" placeholder="Prénom" onChange={e => setPrenom(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <div className="field">
                                <label className="label">Email</label>
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" name="mail" placeholder="Email" onChange={e => setMail(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-3">
                            <div className="field">
                                <label className="label">Mot de passe</label>
                                <p className="control has-icons-left">
                                    <input className="input" type="password" name="mdp" placeholder="Password" onChange={e => setMdp(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                                <p class="help">Minimum 7 caractères</p>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="field">
                                <label className="label">Confirmer le mot de passe</label>
                                <p className="control has-icons-left">
                                    <input className="input" type="password" name="mdp2" placeholder="Password" onChange={e => setMdp2(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-1">
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success" onClick={e => user()}>
                                        Créer
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}

export default FormulaireCreation