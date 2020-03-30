import React, {useContext, useState, useEffect} from 'react'
import UserContext from '../UserContext'
import {getUsers, deleteUserAdmin} from '../../control/actions/typesActions'
import Notif from '../notifs/Notifs'

const ListeUser = () => {

    const {
        id
    } = useContext(UserContext);

    const [users, setUsers] = useState(false)

    useEffect(() => {

        if(id && !users){
            const res = getUsers()
            res.then((value) => {
                if(!value.error){
                    setUsers(value.data)
                }
            })
            
        }
        
    })

    const supprimer = async (id) => {

        await deleteUserAdmin(id)
        const res = getUsers()
            res.then(async (value) => {
                if(!value.error){
                    await setUsers(value.data)
                }
            })
    }
    return(
        <div className="container">
            <section className="section" style={{backgroundColor: 'white'}}>
                <h1 className="title-profil title">Liste des Utilisateurs: </h1>
           
                <section className="section">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="table-container">
                                    <table className="table is-striped is-fullwidth">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Supprimer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users != false && 
                                            users.map((user) =>
                                                <tr>
                                                    <td>{user.email}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.firstname}</td>
                                                    <td><button className="button is-danger is-rounded has-text-centered" onClick={(e) => supprimer(user._id)}>
                                                        <i className="fas fa-trash-alt is-marginless"></i>
                                                    </button></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </section>
        </div>
    )
}

export default ListeUser