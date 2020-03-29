import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormCompetence from "./itemCompetence"

const Competence = () => {
    const {
        content_competence,
        updateformValue,
        openCompetence,
        setOpenCompetence
    } = useContext(UserContext);

    const handleChange = (value, key) => {
        const values = content_competence
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_competence", values)
    }

    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_competence", []), 
                            setOpenCompetence(true), 
                            updateformValue("removeContent", "content_competence")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-star is-size-6"></i>Compétences</h1>
                </div>
                <div className="column has-text-right">
                <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            setOpenCompetence(!openCompetence)
                            )}
                    >
                        <i className="fas fa-compress" style={{margin:"5px"}}></i>
                </button>    
                </div>
            </div>
            {openCompetence?(
                    content_competence.map((item, i) => 
                        <FormCompetence key={i} number={i} item={item} onItemChange={handleChange} />
                    )
                ):(
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Competence;