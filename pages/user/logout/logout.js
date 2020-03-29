import React, { useContext, useEffect } from 'react'
import {logoutUser} from '../../../control/actions/typesActions'
import UserContext from '../../../components/UserContext'

const Logout = () => {

    const {
        setLog,
        setId,
        id
    } = useContext(UserContext);

    useEffect(() => {

        const res = logoutUser(id)
        res.then((value) => {

            if(!value.error){
                localStorage.setItem('login', value.data.login);
                localStorage.setItem('id', value.data.id);
                setLog(value.data.login)
                setId(value.data.id)
                location.assign('/')
            }
            
        })
    })

    return (
        <>
        </>
    )
}

export default Logout