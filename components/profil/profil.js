import React, {useState, useContext, useEffect} from 'react'
import {getUser, updateProfil} from '../../control/actions/typesActions'
import UserContext from '../UserContext'
import Notif from '../notifs/Notifs'

const InfosProfil = () => {
    
    const {
        id
    } = useContext(UserContext);

    const [message, setMessage] = useState('')
    const [user, setUser] = useState(false)
    const [name, setName] = useState(user.name)
    const [firstName, setFirstName] = useState(user.firstname)

    useEffect(() => {

        if(id && !user){
            const res = getUser(id)
            res.then((value) => {
                if(!value.error){
                    setUser(value.data)
                    setName(value.data.name)
                    setFirstName(value.data.firstname)
                }
            })
        }
        else{
            console.log("Error")
        }
    })

    const update = () => {

        if(name == '' || firstName == ''){
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
            const res = updateProfil({
                id: id,
                firstname: firstName,
                name: name
            })
    
            res.then((value) => {
                if(!value.error){
                    setName(value.data.user.name)
                    setFirstName(value.data.user.firstname)
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

    return (
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">Profil</h1>

                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <div className="field">
                                <label className="label">Nom</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="DUPONT" value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Prénom</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Martin" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
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
                                    <button className="button is-primary is-light is-rounded" onClick={(e) => update()}>Sauvegarder le Profil</button>
                                </div>
                            </div>
                            <div className="is-hidden-desktop">
                                <div className="control">
                                    <button className="button is-danger is-rounded">Annuler</button>
                                </div>
                                <br/>
                                <div className="control">
                                    <button className="button is-primary is-rounded" onClick={(e) => update()}>Sauvegarder le Profil</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </section>

        </div>
    )
}

export default InfosProfil