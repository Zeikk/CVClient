import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../UserContext"

const FormResume = () => {

    const {
        content_resume,
        openResume,
        setOpenResume,
        updateformValue
    } = useContext(UserContext);

    const [resume, setResume] = useState(content_resume[0].resume);

    useEffect(() => {
        handleChange({
            resume
        }, 0)
    }, [resume,])


    const handleChange = (value, key) => {
        const values = content_resume
            .map((item, i) => (i === key ? value : item))
        updateformValue("content_resume", values)
    }

    return(
        <div className="box">
            <button className="hiddenOpenButton is-pulled-left" onClick={(e) => {updateformValue("content_resume", []), setOpenResume(true), updateformValue("removeContent", "content_resume")}}><i className="fas fa-times"></i></button>

            <h1 className="title is-size-5">
            <button className="button hiddenOpenButton is-pulled-right" onClick={(e) => {setOpenResume(!openResume)}}><i className="fas fa-compress"></i></button>
            Resumé
            </h1>
            {
                openResume ? (
                    <textarea className="textarea" value={resume} onChange={(e) => (setResume(e.target.value))} placeholder="Introduction sur vous, pourquoi voulez-vous postuler dans cette entreprise ? Vos compétentes..."></textarea>

                ) :
                (
                    <textarea className="textarea" value={resume} onChange={(e) => (setResume(e.target.value))} placeholder="Introduction sur vous, pourquoi voulez-vous postuler dans cette entreprise ? Vos compétentes..." style={{display: "none"}}></textarea>
                )
            }
        <hr />
    </div>
    )

};

export default FormResume;