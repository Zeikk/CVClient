import React, {useState, useEffect, useContext} from 'react'
import {getUser} from '../../control/actions/typesActions'
import UserContext from '../UserContext'

const Row = ({champ, value}) => {

    return (
        <>
        <div className="columns">
            <div className="column is-2 is-offset-2">
                <p className="subtitle-profil is-5">{champ}</p>
            </div>
            <div className="column  is-4 is-offset-3">
                <p className="title is-5">{value}</p>
            </div>
        </div>
        <hr className="dividerProfil"/>
        </>
    )
}

const VueEnsemble = () => {

    const {
        id
    } = useContext(UserContext);

    const [user, setUser] = useState(false)
    
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
        
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">Profil</h1>

                <section className="section">
                    <Row 
                    champ = "Nom"
                    value = {user.name}
                    />
                    <Row 
                    champ = "Prénom"
                    value = {user.firstname}
                    />
                    <Row 
                    champ = "Adresse mail"
                    value = {user.email}
                    />
                </section>

                <h1 className="title-profil title">Vos CV</h1>
                <section className="section has-text-centered">
                    <p className="subtitle is-3" style={{color: '#D3D3D3'}}>Aucun CV sauvegardé</p>
                </section>
            </section>
        </div>
        
    )
}

export default VueEnsemble