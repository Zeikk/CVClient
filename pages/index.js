import React, { Component } from 'react';
import Layout from '../components/layout';
import Why from '../components/index/Why'
import Conseils from '../components/index/Conseils'
const Index = () => {
    return (
        <Layout>
                <section className="hero is-dark is-fullheight is-home">
                    <div className="hero-body">
                        <div className="container">
                            <div className="has-text-centered">
                                <button className="button is-rounded is-dark title is-size-1 is-size-4-mobile">Bienvenue sur CV Creator </button>
                                <br />
                                <br />
                                <a className="button is-rounded is-medium is-dark" href="/app">Créer son CV en ligne</a>
                            </div>
                        </div>
                    </div>
                </section>
                <Why title="Pourquoi CvCreator ?" arg1="RAPIDE ET FACILE" arg2="MODERNE" arg3="PROFESSIONNEL" />
                <section className="hero is-light is-large">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-size-1">
                                Créer votre CV en ligne
                            </h1>
                            <div className="trait-title"></div>
                            <div className="columns">
                                <div className="column">
                                    <p className="is-size-5" style={{ marginBottom: "30px", marginTop: "40px" }}>Créer facilement des CV correspondant à vos envies et cela en remplissant un simple formulaire avec vos données personnelles et en choisissant parmi un des différents templates.</p>
                                    <p className="is-size-5" style={{ marginBottom: "30px" }}>Tous les champs du CV sont modulables vous permettant ainsi d’adapter votre CV selon vos envies, le rendant par conséquent unique et à votre image.</p>
                                    <p className="is-size-5">Lors de l’utilisation, vous avez un aperçu en direct de l’aspect que votre CV aura lors du téléchargement vous permettant ainsi de vous rendre compte plus facilement si cela convient à vos attentes.</p>
                                </div>
                                <div className="column">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Conseils />
            </Layout>
            
    );
};

export default Index;
