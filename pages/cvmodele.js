import React, { Component } from 'react';
import '../styles/index.sass'


class cv extends Component {
    render() {
        return (

            <div className="page">
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>

                   <div>
                        <div className="pageA4">
                            <div className=" info-cv-min">
                                <div align="center">
                                    <img className="photoCv-min" src="../static/images/imageprofil.jpg"/>
                                    <h2 className="name-section-min">Jean Dupont</h2>
                                </div>
                                <div className="info-cv-content-min">
                                    <div className="info-cv-content-element-min">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>1 Av. des Champs-Élysées 75008 Paris</p>
                                    </div>
                                    <div className="info-cv-content-element-min">
                                        <i class="fas fa-phone"></i>
                                        <p>0602030405</p>
                                    </div>
                                    <div className="info-cv-content-element-min">
                                        <i class="fas fa-envelope"></i>
                                        <p>email@gmail.com</p>
                                    </div>
                                </div>




                                <div className="part-title-section-min">
                                    <h2 className="title-section">Compétences</h2><hr color="#333333"/>
                                </div>
                                <div className="info-cv-competences-elemen-mint">
                                    <p className="info-cv-competences-title-min">PHP</p>
                                    <div className="info-cv-competences-score-min">
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-clair-min"></div>
                                    </div>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="info-cv-competences-title-min">React.js</p>
                                    <div className="info-cv-competences-score-min">
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce"></div>
                                        <div className="bulle-clair-min"></div>
                                        <div className="bulle-clair-min"></div>
                                    </div>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="info-cv-competences-title-min">Mongo DB</p>
                                    <div className="info-cv-competences-score-min">
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-clair-min"></div>
                                        <div className="bulle-clair-min"></div>
                                    </div>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="info-cv-competences-title-min">Marketing</p>
                                    <div className="info-cv-competences-score-min">
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-clair-min"></div>
                                        <div className="bulle-clair-min"></div>
                                        <div className="bulle-clair-min"></div>
                                    </div>
                                </div>
                                <div className="part-title-section-min">
                                    <h2 className="title-section-min">Langues</h2><hr color="#333333"/>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="info-cv-competences-title-min">Français</p>
                                    <div className="info-cv-competences-score-min">
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                    </div>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="info-cv-competences-title-min">Anglais</p>
                                    <div className="info-cv-competences-score-min">
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-fonce-min"></div>
                                        <div className="bulle-clair-min"></div>
                                    </div>
                                </div>
                                <div className="part-title-section-min">
                                    <h2 className="title-section-min">Centres d'intérêt</h2><hr color="#333333"/>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="">Cuisine</p>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="">Course à pied</p>
                                </div>
                                <div className="info-cv-competences-element-min">
                                    <p className="">Voyage</p>
                                </div>

                            </div>
                            <div className="content-cv-min" >

                                <div className="part-title-section-min">
                                    <h2 className="title-section-min">Profil</h2><hr color="#333333"/>
                                </div>
                                <p className="has-text-left-min">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                <div className="part-title-section-min">
                                    <h2 className="title-section-min">Formations</h2><hr color="#333333"/>
                                </div>
                                <div className="part-element-section-min">
                                    <div className="part-element-section-datetitle-min">
                                        <p className="part-element-section-date-min">10/2008 - Present</p>
                                        <p className="part-element-section-title-min">Consultant E-commerce</p>
                                    </div>
                                    <div className="part-element-section-lieu-min">
                                        <p>Paris, France</p>
                                    </div>
                                </div>
                                <div className="part-element-section-min">
                                    <div className="part-element-section-datetitle-min">
                                        <p className="part-element-section-date-min">10/2008 - 12/2016</p>
                                        <p className="part-element-section-title-min">Developpeur Web</p>
                                    </div>
                                    <div className="part-element-section-lieu-min">
                                        <p>Caen, France</p>
                                    </div>
                                </div>
                                <div className="part-element-section-min">
                                    <div className="part-element-section-datetitle-min">
                                        <p className="part-element-section-date-min">10/2008 - 12/2016</p>
                                        <p className="part-element-section-title-min">Developpeur Web Junior</p>
                                    </div>
                                    <div className="part-element-section-lieu-min">
                                        <p>Caen, France</p>
                                    </div>
                                </div>
                                <div className="part-title-section-min">
                                    <h2 className="title-section-min">Expériences Professionnelles</h2><hr color="#333333"/>
                                </div>
                                <div className="part-element-section-min">
                                    <div className="part-element-section-datetitle-min">
                                        <p className="part-element-section-date-min">10/2008 - Present</p>
                                        <p className="part-element-section-title-min">Consultant E-commerce</p>
                                    </div>
                                    <div className="part-element-section-more-min">
                                        <p className="part-element-section-lieu-min">Paris, France</p>
                                        <p className="part-element-section-description-min">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>

                                </div>
                                <div className="part-element-section-min">
                                    <div className="part-element-section-datetitle-min">
                                        <p className="part-element-section-date-min">10/2008 - 12/2016</p>
                                        <p className="part-element-section-title-min">Developpeur Web</p>
                                    </div>
                                    <div className="part-element-section-more-min">
                                        <p className="part-element-section-lieu-min">Paris, France</p>
                                        <p className="part-element-section-description-min">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="part-element-section-min">
                                    <div className="part-element-section-datetitle-min">
                                        <p className="part-element-section-date-min">10/2008 - 12/2016</p>
                                        <p className="part-element-section-title-min">Developpeur Web Junior</p>
                                    </div>
                                    <div className="part-element-section-more-min">
                                        <p className="part-element-section-lieu-min">Paris, France</p>
                                        <p className="part-element-section-description-min">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>

                            </div>

                        </div>  

                    </div>
            </div>
        );
    }
}

export default cv;