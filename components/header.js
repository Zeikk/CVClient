import React, { useEffect, useContext } from 'react';
import UserContext from './UserContext'

const header = () => {

    const {
        isLog,
        setLog,
        setId,
        setFirstVisite
    } = useContext(UserContext)

    useEffect(() => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target
                    const $target = document.getElementById(target)

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active')
                    $target.classList.toggle('is-active')
                })
            })
        }
        
        const remember = localStorage.getItem('login') === 'true'
        const log = remember ? 'true' : 'false'
        setLog(log)
        setId(localStorage.getItem('id'))

    })
    

    return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                  <div className="navbar-brand">
                    <a className="navbar-item title" href="/">
                        CVCreator
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">

                        <a className="navbar-item" href="/app">
                            Créer un CV
                        </a>
                        <a className="navbar-item" href="/#conseils">
                            Nos conseils
                        </a>
                        {isLog === 'true' && (
                            <a className="navbar-item" href="/user/profil">
                                Mon Profil
                            </a>
                        )}

                        <div className="navbar-item">
                            <div className="buttons">
                                {
                                    isLog === 'false' ? (
                                        <a className="button is-rounded" href="/user">
                                            <strong>Connexion</strong>
                                        </a>
                                    ):(
                                        <a className="button is-rounded" href="/user/logout">
                                            <strong>Déconnexion</strong>
                                        </a>
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default header;
