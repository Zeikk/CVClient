import React, { useContext, useEffect } from 'react'
import UserContext from '../../../components/UserContext'

const Logout = () => {

    const {
        setLog,
        setId,
        id
    } = useContext(UserContext);

    useEffect(() => {

        localStorage.setItem('login', false);
        localStorage.setItem('id', "");
        setLog(false)
        setId("")
        location.assign('/')
    })

    return (
        <>
        </>
    )
}

export default Logout