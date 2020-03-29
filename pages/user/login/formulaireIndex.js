import React, {useState, useContext} from 'react'
import {logUser} from '../../../control/actions/typesActions'
import UserContext from '../../../components/UserContext'
import Notif from '../../../components/notifs/Notifs'

const Login = () => {

    const [mail, setMail] = useState('')
    const [mdp, setMdp] = useState('')
    const [message, setMessage] = useState('')

    const {
        setLog,
        setId
    } = useContext(UserContext);

    function login(){

        if(mdp == "" && mail == ""){
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
            const res = logUser({
                mail: mail, 
                mdp: mdp
            })
            res.then((value) => {
                console.log(value)
                if(value.error){
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
                else{
                    localStorage.setItem('login', value.data.login);
                    localStorage.setItem('id', value.data.id);
                    setLog(value.data.login)
                    setId(value.data.id)
                    location.assign('/')
                }
                
            })
        }
        
    }
        return(
            <>
                <section className="section has-text-centered">
                        <h1 className="title is-2">Connectez-vous</h1>
                </section>
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" name="mail" placeholder="Email" onChange={e => setMail(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>
                            <br/>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" name="mdp" placeholder="Password" onChange={e => setMdp(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                                <p class="help">Minimum 7 caractères</p>
                            </div>
                            <br/>
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success" onClick={e => login()}>
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="columns">
                    <div className="column is-offset-10 is-2">
                        <Notif id = 'notifEmpty'
                        messageNotif = {message}/>
                    </div>
                </div>
                <section className="section has-text-centered">
                    <a href="/user/create" className="button is-rounded is-medium">
                        <strong>Créer un compte</strong>
                    </a>
                </section>
                
            </>
        )
    
}

export default Login