import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormProjet from "./itemProjet"

const Projet = () => {
    const {
        content_projet,
        updateformValue,
        setOpenProjet,
        openProjet
    } = useContext(UserContext);

    const handleChange = (value, key) => {
        const values = content_projet
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_projet", values)
    }

    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_projet", []), 
                            setOpenLangue(!openProjet), 
                            updateformValue("removeContent", "content_projet")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-tasks is-size-6"></i>Projet</h1>
                </div>
                <div className="column has-text-right">
                    <button 
                            className="button hiddenOpenButton" 
                            onClick={() => (
                                setOpenProjet(!openProjet)
                                )}
                        >
                            <i className="fas fa-compress" style={{margin:"5px"}}></i>
                    </button>    
                </div>
            </div>
            {
                openProjet ?
                (
                    content_projet.map((item, i) => 
                        <FormProjet key={i} number={i} item={item} onItemChange={handleChange}/>
                    )
                ) : (
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Projet;