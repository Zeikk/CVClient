import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormLoisirs from "./itemLoisirs"

const Loisirs = () => {
    const {
        content_loisirs,
        updateformValue,
        openLoisirs,
        setOpenLoisirs
    } = useContext(UserContext);

    const handleChange = (value, key) => {
        const values = content_loisirs
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_loisirs", values)
    }

    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_loisirs", []), 
                            setOpenLangue(!openLoisirs), 
                            updateformValue("removeContent", "content_loisirs")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-language is-size-6"></i>Loisirs</h1>
                </div>
                <div className="column has-text-right">
                    <button 
                            className="button hiddenOpenButton" 
                            onClick={() => (
                                setOpenLoisirs(!openLoisirs)
                                )}
                        >
                            <i className="fas fa-compress" style={{margin:"5px"}}></i>
                    </button>    
                </div>
            </div>
            {openLoisirs ? (
                content_loisirs.map((item, i) => 
                    <FormLoisirs key={i} number={i} item={item} onItemChange={handleChange}/>
                )
                ) :
                (
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Loisirs;