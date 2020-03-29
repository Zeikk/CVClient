import React, { useEffect, useState} from 'react';

const FormCertification = props => {
    const {number, item, onItemChange } = props

    const [nameCertification, setNameCertification] = useState(item.nameCertification);
    const [infoPlus, setInfoPlus] = useState(item.infoPlus);
    
    useEffect(() => {
        onItemChange({
            nameCertification,
            infoPlus
        }, number)
    }, [nameCertification, infoPlus])

    return(
        <>
            <div className="field">
                <label className="label">Nom de la certification *</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Entrer le nom de l'école" value={nameCertification} onChange={(e) => {setNameCertification(e.target.value)}}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Information Supplémentaire *</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Entrer des informations supplémentaire" value={infoPlus} onChange={(e) => {setInfoPlus(e.target.value)}}/>
                </div>
            </div>
        </>
    )
};

export default FormCertification;