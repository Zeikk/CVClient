/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis Rivat et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import React, {useState, useContext, useEffect} from 'react'
import VueEnsemble from '../../../components/profil/vueEnsemble'
import SectionCV from '../../../components/profil/cv'
import InfosProfil from '../../../components/profil/profil'
import ListeUser from '../../../components/profil/listeUsers'
import MDP from '../../../components/profil/motDePasse'
import AdresseMail from '../../../components/profil/adresseMail'
import Desinscription from '../../../components/profil/desinscrire'
import UserContext from '../../../components/UserContext'
import {getUser} from '../../../control/actions/typesActions'

const Profil = () => {

    const [profil, setProfil] = useState('vue')
    const [deroulant, setDeroulant] = useState(false)
    const [user, setUser] = useState(false)

    const {
        id
    } = useContext(UserContext);
    

    useEffect(() => {

        if(id && !user){
            const res = getUser(id)
            res.then((value) => {
                if(!value.error){
                    setUser(value.data)
                }
            })
        }
        else{
            console.log("Error")
        }
    })

    return(
        <div className="columns admin is-marginless">
            <div className="column is-3">
                <section className="section">
                    <aside class="menu">
                        <p class="menu-label">
                            General
                        </p>
                        <ul class="menu-list">
                            <li><a className={profil == 'vue' ? ('is-active'): ('')} onClick={(e) => setProfil('vue')}>
                                <span class="icon">
                                    <i class="fas fa-home"></i>                   
                                </span>
                                <span>Vue d'Ensemble</span>
                            </a></li>
                            {user.role == 0 ? (
                            <li><a className={profil == 'cv' ? ('is-active'): ('')} onClick={(e) => setProfil('cv')}>
                                <span class="icon">
                                    <i class="far fa-file-alt"></i>             
                                </span>
                                <span>CV</span>
                            </a></li>
                            ) : (
                            <li><a className={profil == 'liste' ? ('is-active'): ('')} onClick={(e) => setProfil('liste')}>
                                <span class="icon">
                                    <i class="fas fa-users"></i>           
                                </span>
                                <span>Liste Utilisateurs</span>
                            </a></li>
                            )}
                        </ul>
                        <p class="menu-label">
                            Administration
                        </p>
                        <ul class="menu-list">
                            <li><a onClick={(e) => setDeroulant(!deroulant)}>
                                <span style={{marginRight: '5px'}}>Informations Personnelles</span>
                                <span class="icon">
                                    <i class="fas fa-sort-down"></i>             
                                </span>
                            </a>
                                {deroulant && (
                                <ul>
                                    <li><a className={profil == 'infosProfil' ? ('is-active'): ('')} onClick={(e) => setProfil('infosProfil')}>
                                        <span class="icon">
                                            <i class="fas fa-user-edit"></i>                  
                                        </span>
                                        <span>Profil</span>
                                    </a></li>
                                    <li><a className={profil == 'mdp' ? ('is-active'): ('')} onClick={(e) => setProfil('mdp')}>
                                        <span class="icon">
                                            <i class="fas fa-lock"></i>                  
                                        </span>
                                        <span>Mot de passe</span>
                                    </a></li>
                                    <li><a className={profil == 'mail' ? ('is-active'): ('')} onClick={(e) => setProfil('mail')}>
                                        <span class="icon">
                                            <i class="fas fa-at"></i>         
                                        </span>
                                        <span>Adresse mail</span>
                                    </a></li>
                                    <li><a className={profil == 'desinscrire' ? ('is-active'): ('')} onClick={(e) => setProfil('desinscrire')}>
                                        <span class="icon">
                                            <i class="fas fa-trash-alt"></i>         
                                        </span>
                                        <span>Désinscrire</span>
                                    </a></li>
                                </ul>
                                )}
                            </li>
                        </ul>
                    </aside>
                </section>
            </div>
            <div className="column is-9">
                {profil == 'vue' && (
                    <VueEnsemble user = {user}/>
                )}
                {profil == 'cv' && (
                    <SectionCV/>
                )}
                {profil == 'liste' && (
                    <ListeUser/>
                )}
                {profil == 'infosProfil' && (
                    <InfosProfil user = {user}/>
                )}
                {profil == 'mdp' && (
                    <MDP user = {user}/>
                )}
                {profil == 'mail' && (
                    <AdresseMail user = {user}/>
                )}
                {profil == 'desinscrire' && (
                    <Desinscription/>
                )}
            </div>
        </div>
        
    )
}

export default Profil