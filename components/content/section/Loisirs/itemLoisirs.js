import React, { useEffect, useState} from 'react';

const FormLoisirs = props => {
    const {number, item, onItemChange } = props

    const [nameLoisir, setNameLoisir] = useState(item.nameLoisir);
    //const [description, setDescription] = useState(item.description);
    
    useEffect(() => {
        onItemChange({
            nameLoisir,
            //description
        }, number)
    }, [nameLoisir/*, description*/])

    return(
        <>
        <div class="field">
            <label class="label">Nom du loisir *</label>
            <div class="control">
                <input class="input" type="text" placeholder="Entrer le nom du loisir" value={nameLoisir} onChange={(e) => {setNameLoisir(e.target.value)}}/>
            </div>
        </div>
        
            {
                /* Not used for now -- Alexis 
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" type="text" placeholder="Entrer une description" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </div>
                </div>
                */
            }
    </>
    )
};

export default FormLoisirs;