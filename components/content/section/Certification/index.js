import React, { useContext }  from 'react';
import UserContext from "../../../UserContext"
import FormCertification from "./itemCertification"

const Certification = () => {
    const {
        content_certification,
        updateformValue,
        openCertification,
        setOpenCertification
    } = useContext(UserContext);

    const handleChange = (value, key) => {
        const values = content_certification
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_certification", values)
    }


    return(
        <div className="box">
            <div className="columns is-mobile is-vcentered is-centered">
                <div className="column has-text-left">
                    <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            updateformValue("content_certification", []), 
                            setOpenCertification(true), 
                            updateformValue("removeContent", "content_certification")
                            )}
                    >
                        <i className="fas fa-times" style={{margin:"5px"}}></i>
                    </button>            
                </div>
                <div className="column has-text-centered">
                    <h1 className="title is-size-5"><i className="fas fa-certificate is-size-6"></i>Certification</h1>
                </div>
                <div className="column has-text-right">
                <button 
                        className="button hiddenOpenButton" 
                        onClick={() => (
                            setOpenCertification(!openCertification)
                            )}
                    >
                        <i className="fas fa-compress" style={{margin:"5px"}}></i>
                </button>    
                </div>
            </div>
            
            
            {openCertification?(
                    content_certification.map((item, i) => 
                        <FormCertification key={i} number={i} item={item} onItemChange={handleChange}/>
                    )
                ):(
                    <div style={{display: "none"}}></div>
                )
            }
            <hr />
        </div>
    )
};

export default Certification;