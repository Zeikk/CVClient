/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis Rivat et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import React, {useContext} from 'react'
import UserContext from '../UserContext'
import {deleteUser} from '../../control/actions/typesActions'

const Desinscription = () => {

    const {
        id,
        setLog,
        setId
    } = useContext(UserContext);

    const supprimer = () => {

        const res = deleteUser(id)
        res.then((value) => {
            if(!value.error){
                document.getElementsByTagName('html')[0].classList.toggle('is-clipped')
                localStorage.setItem('login', 'false')
                localStorage.setItem('id', '')
                setLog(false)
                setId('')
                location.assign('/')
            }
        })
    }

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
                        <button className="button is-danger is-rounded is-large-desktop" onClick={(e) => {document.getElementById('delete').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}>
                            <span className="icon">
                                <i className="fas fa-trash-alt is-marginless"></i>
                            </span>
                            <span>| Supprimer le Compte</span>
                        </button>
                    </div>
                    <div className="modal" id="delete">
                        <div className="modal-background" onClick={(e) => {document.getElementById('delete').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}></div>
                            <div className="modal-card">
                                <header className="modal-card-head">
                                <p className="modal-card-title">Suppresion de compte: </p>
                                <button className="delete" aria-label="close" onClick={(e) => {document.getElementById("delete").classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}></button>
                                </header>
                                <section className="modal-card-body">
                                    <section className="section has-text-centered">
                                        <h2 className="title is-4">Voulez-vous supprimer votre compte ?</h2>
                                    </section>
                                    <section className="">
                                        <div class="columns is-centered is-mobile">
                                            <div class="column is-5">
                                            <p class="buttons">
                                                <button class="button is-danger" onClick={(e) => {supprimer()}}>
                                                    <span>Supprimer</span>
                                                    <span class="icon is-small">
                                                    <i class="fas fa-times"></i>
                                                    </span>
                                                </button>
                                                <button class="button is-outlined" onClick={(e) => {document.getElementById('delete').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}>
                                                    <span>Annuler</span>
                                                </button>
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    
    )
}

export default Desinscription