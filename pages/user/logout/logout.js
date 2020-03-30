/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis Rivat et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

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