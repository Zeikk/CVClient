import React, { Component } from 'react';
import '../styles/index.sass'


class page extends Component {
    render() {
        return (

            <div className="page">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />

                <div>
                    <div className="pageA42">
                        <div className=" info-cv">
                            <div align="center">
                                <img className="photoCv" src="../static/images/imageprofil.jpg" />
                                <h2 className="name-section">Jean Dupont</h2>
                            </div>
                            <div className="info-cv-content">
                                <div className="info-cv-content-element">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>1 Av. des Champs-Élysées 75008 Paris</p>
                                </div>
                                <div className="info-cv-content-element">
                                    <i class="fas fa-phone"></i>
                                    <p>0602030405</p>
                                </div>
                                <div className="info-cv-content-element">
                                    <i class="fas fa-envelope"></i>
                                    <p>email@gmail.com</p>
                                </div>
                            </div>




                            <div className="part-title-section">
                                <h2 className="title-section">Compétences</h2><hr color="#333333" />
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="info-cv-competences-title">PHP</p>
                                <div className="info-cv-competences-score">
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-clair"></div>
                                </div>
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="info-cv-competences-title">React.js</p>
                                <div className="info-cv-competences-score">
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-clair"></div>
                                    <div className="bulle-clair"></div>
                                </div>
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="info-cv-competences-title">Mongo DB</p>
                                <div className="info-cv-competences-score">
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-clair"></div>
                                    <div className="bulle-clair"></div>
                                </div>
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="info-cv-competences-title">Marketing</p>
                                <div className="info-cv-competences-score">
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-clair"></div>
                                    <div className="bulle-clair"></div>
                                    <div className="bulle-clair"></div>
                                </div>
                            </div>
                            <div className="part-title-section">
                                <h2 className="title-section">Langues</h2><hr color="#333333" />
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="info-cv-competences-title">Français</p>
                                <div className="info-cv-competences-score">
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                </div>
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="info-cv-competences-title">Anglais</p>
                                <div className="info-cv-competences-score">
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-fonce"></div>
                                    <div className="bulle-clair"></div>
                                </div>
                            </div>
                            <div className="part-title-section">
                                <h2 className="title-section">Centres d'intérêt</h2><hr color="#333333" />
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="">Cuisine</p>
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="">Course à pied</p>
                            </div>
                            <div className="info-cv-competences-element">
                                <p className="">Voyage</p>
                            </div>

                        </div>
                        <div className="content-cv" >

                            <div className="part-title-section">
                                <h2 className="title-section">Profil</h2><hr color="#333333" />
                            </div>
                            <p className="has-text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className="part-title-section">
                                <h2 className="title-section">Formations</h2><hr color="#333333" />
                            </div>
                            <div className="part-element-section">
                                <div className="part-element-section-datetitle">
                                    <p className="part-element-section-date">10/2008 - Present</p>
                                    <p className="part-element-section-title">Consultant E-commerce</p>
                                </div>
                                <div className="part-element-section-lieu">
                                    <p>Paris, France</p>
                                </div>
                            </div>
                            <div className="part-element-section">
                                <div className="part-element-section-datetitle">
                                    <p className="part-element-section-date">10/2008 - 12/2016</p>
                                    <p className="part-element-section-title">Developpeur Web</p>
                                </div>
                                <div className="part-element-section-lieu">
                                    <p>Caen, France</p>
                                </div>
                            </div>
                            <div className="part-element-section">
                                <div className="part-element-section-datetitle">
                                    <p className="part-element-section-date">10/2008 - 12/2016</p>
                                    <p className="part-element-section-title">Developpeur Web Junior</p>
                                </div>
                                <div className="part-element-section-lieu">
                                    <p>Caen, France</p>
                                </div>
                            </div>
                            <div className="part-title-section">
                                <h2 className="title-section">Expériences Professionnelles</h2><hr color="#333333" />
                            </div>
                            <div className="part-element-section">
                                <div className="part-element-section-datetitle">
                                    <p className="part-element-section-date">10/2008 - Present</p>
                                    <p className="part-element-section-title">Consultant E-commerce</p>
                                </div>
                                <div className="part-element-section-more">
                                    <p className="part-element-section-lieu">Paris, France</p>
                                    <p className="part-element-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                            </div>
                            <div className="part-element-section">
                                <div className="part-element-section-datetitle">
                                    <p className="part-element-section-date">10/2008 - 12/2016</p>
                                    <p className="part-element-section-title">Developpeur Web</p>
                                </div>
                                <div className="part-element-section-more">
                                    <p className="part-element-section-lieu">Paris, France</p>
                                    <p className="part-element-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="part-element-section">
                                <div className="part-element-section-datetitle">
                                    <p className="part-element-section-date">10/2008 - 12/2016</p>
                                    <p className="part-element-section-title">Developpeur Web Junior</p>
                                </div>
                                <div className="part-element-section-more">
                                    <p className="part-element-section-lieu">Paris, France</p>
                                    <p className="part-element-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default page;