import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormFormation from "./itemFormation"

const Formation = () => {
    const {
        content_formation,
        updateformValue,
        openFormation,
        setOpenFormation
    } = useContext(UserContext);
    
    const handleChange = (value, key) => {
        const values = content_formation
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_formation", values)
    }

    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_formation", []), 
                            setOpenFormation(!openFormation), 
                            updateformValue("removeContent", "content_formation")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-graduation-cap is-size-6"></i>Formations</h1>
                </div>
                <div className="column has-text-right">
                    <button 
                            className="button hiddenOpenButton" 
                            onClick={() => (
                                setOpenFormation(!openFormation)
                                )}
                        >
                            <i className="fas fa-compress" style={{margin:"5px"}}></i>
                    </button>    
                </div>
            </div>
            {openFormation?(
                    content_formation.map((item, i) => 
                        <FormFormation key={i} number={i} item={item} onItemChange={handleChange} />
                    )
                ):(
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Formation;
