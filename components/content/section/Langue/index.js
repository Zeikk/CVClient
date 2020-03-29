import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormLangue from "./itemLangue"

const Langue = () => {
    const {
        content_langues,
        openLangue,
        setOpenLangue,
        updateformValue
    } = useContext(UserContext);

    const handleChange = (value, key) => {
        const values = content_langues
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_langues", values)
    }

    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_langues", []), 
                            setOpenLangue(!openLangue), 
                            updateformValue("removeContent", "content_langues")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-language is-size-6"></i>Langues</h1>
                </div>
                <div className="column has-text-right">
                    <button 
                            className="button hiddenOpenButton" 
                            onClick={() => (
                                setOpenLangue(!openLangue)
                                )}
                        >
                            <i className="fas fa-compress" style={{margin:"5px"}}></i>
                    </button>    
                </div>
            </div>
            
            {openLangue ?(
                content_langues.map((item, i) => 
                    <FormLangue key={i} number={i} item={item} onItemChange={handleChange}/>
                )
                ) :(
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Langue;