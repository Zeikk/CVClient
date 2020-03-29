import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormExperiencePro from "./itemExperiencePro"

const Experience = () => {
    const {
        content_ExperiencePro,
        updateformValue,
        openExperience,
        setOpenExperience
    } = useContext(UserContext);

    const handleChange = (value, key) => {
        const values = content_ExperiencePro
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_ExperiencePro", values)
    }

    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_ExperiencePro", []), 
                            setOpenExperience(!openExperience), 
                            updateformValue("removeContent", "content_ExperiencePro")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-user-tie is-size-6"></i>Experience Professionnelle</h1>
                </div>
                <div className="column has-text-right">
                <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            setOpenExperience(!openExperience)
                            )}
                    >
                        <i className="fas fa-compress" style={{margin:"5px"}}></i>
                </button>    
                </div>
            </div>

            {openExperience?(
                    content_ExperiencePro.map((item, i) => 
                        <FormExperiencePro key={i} number={i} item={item} onItemChange={handleChange} />
                    )
                ):(
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Experience;