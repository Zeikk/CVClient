import React, { useContext, useState } from 'react';
import UserContext from "../../components/UserContext"
import {logUser} from "../../pages/control/actions/typesActions"

function download(filename, text) {
    let lien = document.createElement('a');
    lien.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    lien.setAttribute('download', filename);

    lien.style.display = 'none';
    document.body.appendChild(lien);

    lien.click();

    document.body.removeChild(lien);
}


const buttonSave = () => {
    const {
        nom,
        prenom,
        mail,
        tel,
        postal,
        ville,
        adresse,
        colorHeader,
        colorContent,
        pictureSize,
        pictureShape,
        police,
        content_resume,
        content_ExperiencePro,
        content_formation,
        content_langues,
        content_projet,
        content_cours,
        content_loisirs,
        content_certification,
        photo,
        about_dateDeNaissance,
        about_dateDeNaissance_text,
        dateNaissance,
        formatDate,
        separateurDate,
        about_siteWeb,
        about_siteWeb_text,
        about_facebook,
        about_facebook_text,
        about_linkedin,
        about_linkedin_text,
        about_permisDeConduire,
        about_permisDeConduire_text,
        permisB,
        permisA,
        permisAM,
        about_instagram,
        about_instagram_text,
        about_twitter,
        about_twitter_text,
        about_github,
        about_github_text,
        content,
        isLog,
        setLog,
        setToken
    } = useContext(UserContext)

    const fichierJSON = {
        nom,
        prenom,
        mail,
        tel,
        postal,
        ville,
        adresse,
        colorHeader,
        colorContent,
        pictureSize,
        pictureShape,
        police,
        content_resume,
        content_ExperiencePro,
        content_formation,
        content_langues,
        content_projet,
        content_cours,
        content_loisirs,
        content_certification,
        photo,
        about_dateDeNaissance,
        about_dateDeNaissance_text,
        dateNaissance,
        formatDate,
        separateurDate,
        about_siteWeb,
        about_siteWeb_text,
        about_facebook,
        about_facebook_text,
        about_linkedin,
        about_linkedin_text,
        about_permisDeConduire,
        about_permisDeConduire_text,
        permisB,
        permisA,
        permisAM,
        about_instagram,
        about_instagram_text,
        about_twitter,
        about_twitter_text,
        about_github,
        about_github_text,
        content
    }

    const [mailForm, setMailForm] = useState('')
    const [mdp, setMdp] = useState('')

    function login(){

        const res = logUser({
            mail: mailForm, 
            mdp: mdp
        })
        res.then((value) => {
            localStorage.setItem('login', value.data.login);
            localStorage.setItem('token', value.data.token);
            setLog(value.data.login)
            setToken(value.data.token)
            document.getElementsByTagName('html')[0].classList.toggle('is-clipped')
        })
    }
    
    return (
        <div>
        {isLog === 'true' ?(
            <button className="button is-dark is-rounded" onClick={event => download("CV.json", JSON.stringify(fichierJSON, null, '\t'))} > Sauvegarder JSON</button>
    
        ):(
            <>
            <button className="button is-dark is-rounded" onClick={e => {document.getElementById('login').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}> Sauvegarder JSON</button>
			<div className="modal" id="login">
				<div className="modal-background" onClick={(e) => {document.getElementById('login').classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}></div>
					<div className="modal-card">
						<header className="modal-card-head">
						  <p className="modal-card-title">Connexion: </p>
						  <button className="delete" aria-label="close" onClick={(e) => {document.getElementById("login").classList.toggle('is-active'), document.getElementsByTagName('html')[0].classList.toggle('is-clipped')}}></button>
						</header>
						<section className="modal-card-body">
                            <section className="section has-text-centered">
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
        </div>
    )
}

export default buttonSave;