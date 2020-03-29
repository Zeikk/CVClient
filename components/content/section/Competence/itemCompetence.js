import React, { useEffect, useState} from 'react';

const FormCompetence = props => {
    const {number, item, onItemChange } = props

    const [nameCompetence, setNameCompetence] = useState(item.nameCompetence);
    const [description, setDescription] = useState(item.description);
    
    useEffect(() => {
        onItemChange({
            nameCompetence,
            description
        }, number)
    }, [nameCompetence, description])


    return(
        <>
            <div className="field">
                <label className="label">Nom de la compétence *</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Entrer le nom du cours" value={nameCompetence} onChange={(e) => {setNameCompetence(e.target.value)}}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea" type="text" placeholder="Entrer une description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
            </div>
        </>
    )
};

export default FormCompetence;