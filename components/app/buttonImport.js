import React, { useContext, useState } from 'react';
import UserContext from "../UserContext"
import Notif from "../notifs/Notifs"
import {logUser} from '../../control/actions/typesActions'

const ButtonImport = () => {

    const {
        updateformValue,
        isLog,
        setLog,
        setId
    } = useContext(UserContext);

    const [mailForm, setMailForm] = useState('')
    const [mdp, setMdp] = useState('')
    const [message, setMessage] = useState('')

    function importerFichier() {
        if (typeof window !== 'undefined') {
            let fichierChoisi = document.getElementById("fileInput").files;

            if (fichierChoisi.length != 0 && fichierChoisi[0].type == "application/json") {

                let lecture = new FileReader();
                lecture.readAsText(fichierChoisi[0]);
                let fichierJson;

                lecture.onload = () => {
                    fichierJson = lecture.result;
                    fichierJson = JSON.parse(fichierJson);
                    for(const [key,value] of Object.entries( fichierJson )){
                        
                        if(Array.isArray(value)){
                            if(key == "content"){
                                updateformValue(key, new Array(Object.values(value)))
                            }
                            else{
                                updateformValue(key, Object.values(value))
                            }
                        }
                        else{
                            updateformValue(key, value)
                        }
                    }

                    //Nécessaire de rappeler ces 2 fonctions pour remplir les champs sinon champs restent vides car valeur pas encore rempli
                    updateformValue("about_permisDeConduire_text", fichierJson.about_permisDeConduire_text)
                    updateformValue("about_dateDeNaissance_text", fichierJson.about_dateDeNaissance_text)

                };
            }
        }
    }

    function login(){

        if(mdp == "" && mailForm == ""){
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
                mail: mailForm, 
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
                }
                
            })
        }
        
    }

    return (
        <>
        {isLog === 'true' ?(
            <>
            <input type="file" id="fileInput" onChange={() => importerFichier()} accept=".json" hidden />
            <div className="column is-3 is-centered" onClick={() => document.getElementById("fileInput").click()}>
                <div className="field is-grouped">
                    <div className="control">
                        <button class="button is-outlined">
                            <span class="icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span>Importer JSON</span>
                        </button>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            <div className="column is-3 is-centered"  onClick={() => {document.getElementById('login').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}>
                <div className="field is-grouped">
                    <div className="control">
                        <button class="button is-outlined">
                            <span class="icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span>Importer JSON</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal" id="login">
				<div className="modal-background" onClick={(e) => {document.getElementById('login').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}></div>
					<div className="modal-card">
						<header className="modal-card-head">
						  <p className="modal-card-title">Connexion: </p>
						  <button className="delete" aria-label="close" onClick={(e) => {document.getElementById("login").classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}></button>
						</header>
						<section className="modal-card-body">
                            <section className="section has-text-centered">
                                <div className="columns">
                                    <div className="column is-2">
                                        <Notif id = 'notifEmpty'
                                        messageNotif = {message}/>
                                    </div>
                                </div>
                                <h1 className="title is-2">Connectez-vous</h1>
                            </section>
                            <section className="">
                                <div class="columns is-centered">
                                    <div class="column is-8">
                                        <div class="field">
                                            <p class="control has-icons-left has-icons-right">
                                                <input class="input" type="email" name="mail" placeholder="Email" onChange={e => setMailForm(e.target.value)}/>
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <br/>
                                        <div class="field">
                                            <p class="control has-icons-left">
                                                <input class="input" type="password" name="mdp" placeholder="Password" onChange={e => setMdp(e.target.value)}/>
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-lock"></i>
                                                </span>
                                            </p>
                                            <p class="help">Minimum 7 caractères</p>
                                        </div>
                                        <br/>
                                        <div class="field">
                                            <p class="control">
                                                <button class="button is-success" onClick={e => login()}>
                                                    Login
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
        			    </section>
                    </div>
            </div>
            </>
        )}
        </>
    )

}

export default ButtonImport;