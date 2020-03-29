import React from 'react'

const Notif = (props) => {

    return(
        <>
        <div className=" notification is-danger is-light is-hidden fast" id={`${props.id}`} style={{position: "absolute"}}>
            <button className="delete"></button>
            {props.messageNotif}
        </div>
        </>
    )
}

export default Notif