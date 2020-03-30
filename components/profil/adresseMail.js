/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis Rivat et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import React, {useContext, useState, useEffect} from 'react'
import UserContext from '../UserContext'
import {getUser, updateAdresse} from '../../control/actions/typesActions'
import Notif from '../notifs/Notifs'

const AdresseMail = () => {

    const {
        id
    } = useContext(UserContext);

    const [user, setUser] = useState(false)
    const [mail, setMail] = useState(user.email)
    const [newMail, setNewMail] = useState("")
    const [mdp, setMdp] = useState("")
    const [modifMail, setModifMail] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {

        if(id && !user){
            const res = getUser(id)
            res.then((value) => {
                if(!value.error){
                    setUser(value.data)
                    setMail(value.data.email)
                }
            })
        }
        else{
            console.log("Error")
        }
    })

    const modification = () => {

        if(user.email == mail)
            setModifMail(true)
        else
            setModifMail(false)
    }

    const update = () => {

        if(mail == '' || newMail == '' || mdp == ''){
            setMessage("Champs du formulaire vide")
            document.getElementById('notifEmpty').classList.toggle('is-hidden')
            document.getElementById('notifEmpty').classList.toggle('fadeInUp')
            document.getElementById('notifEmpty').classList.toggle('animated')
            setTimeout(() =>{ 
                document.getElementById('notifEmpty').classList.toggle('is-hidden')
                document.getElementById('notifEmpty').classList.toggle('fadeInUp')
                document.getElementById('notifEmpty').classList.toggle('animated')
            }, 3000);
        }
        else{
            const res = updateAdresse({
                id: id,
                mail: mail,
                newMail: newMail,
                mdp: mdp
            })
    
            res.then((value) => {
                if(!value.error){
                    setMail(value.data.user.email)
                    setNewMail('')
                    setMdp('')
                    setModifMail(false)
                }
                else{
                    setMessage("Données invalides")
                    document.getElementById('notifEmpty').classList.toggle('is-hidden')
                    document.getElementById('notifEmpty').classList.toggle('fadeInUp')
                    document.getElementById('notifEmpty').classList.toggle('animated')
                    setTimeout(() =>{ 
                        document.getElementById('notifEmpty').classList.toggle('is-hidden')
                        document.getElementById('notifEmpty').classList.toggle('fadeInUp')
                        document.getElementById('notifEmpty').classList.toggle('animated')
                    }, 3000);
                }
             })
        }
        
    }

    return(
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">Adresse Mail</h1>
           
                <section className="section">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Adresse mail</label>
                                    <div className="control">
                                    <input className="input" type="mail" placeholder="alex.lepresle@gmail.fr" value={mail} onChange={(e) => {setMail(e.target.value), modification()}}/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Confirmer adresse mail</label>
                                    <div className="control">
                                        <input className="input" type="mail" placeholder="alex.lepresle@gmail.fr" value={newMail} onChange={(e) => setNewMail(e.target.value)} disabled={!modifMail}/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Confirmer le mot de passe</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="**********" value={mdp} onChange={(e) => setMdp(e.target.value)} disabled={!modifMail}/>
                                    </div>
                                    <p className="help">Minimun 7 caractères</p>
                                </div>
                                <br/>
                                <div className="columns">
                                    <div className="column is-offset-10 is-2">
                                        <Notif id = 'notifEmpty'
                                        messageNotif = {message}/>
                                    </div>
                                </div>
                                <div className="field is-grouped is-hidden-touch">
                                    <div className="control">
                                        <button className="button is-danger is-rounded">Annuler</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary is-rounded" onClick={(e) => update()} disabled={!modifMail}>Sauvegarder l'Adresse Mail</button>
                                    </div>
                                </div>
                                <div className="is-hidden-desktop">
                                    <div className="control">
                                        <button className="button is-danger is-rounded">Annuler</button>
                                    </div>
                                    <br/>
                                    <div className="control">
                                        <button className="button is-primary is-rounded" onClick={(e) => update()} disabled={!modifMail}>Sauvegarder l'Adresse Mail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </section>
        </div>
    )
}

export default AdresseMail