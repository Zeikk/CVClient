import React, { useEffect, useState} from 'react';

const FormLangue = props => {
    const {number, item, onItemChange } = props
    
    const [nameLanguage, setNameLanguage] = useState(item.nameLanguage);
    const [level, setLevel] = useState(item.level);
    const [choice, setChoice] = useState(item.choice);
    const [text, setText] = useState(item.text);
    const [infoPlus, setInfoPlus] = useState(item.infoPlus);

    //Initialisation des choix
    if(choice == undefined || level == undefined){
        setChoice("texte")
        setLevel("A1")
    }
    else if(choice == "texte" && level.length<2){
        setLevel("A1")
    }
    else if(choice == "texte" && level.length>2){
        setLevel(0)
    }
    
    
    useEffect(() => {
        onItemChange({
            nameLanguage,
            choice,
            level,
            text,
            infoPlus,
        }, number)
    }, [nameLanguage, choice, level, text, infoPlus])

    return(
        <>
            <div class="field">
                <label class="label">Langue*</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Entrer le nom de la langue" value={nameLanguage} onChange={(e) => {setNameLanguage(e.target.value)}}/>
                </div>
            </div>
            <div className="columns">
                <div class="field column">
                    <label class="label">Choix</label>
                    <div class="control">
                        <div class="select" >
                            <select onChange={(e) => {setChoice(e.target.value)}}>
                                <option value="texte">Textuel</option>
                                <option value="star">Star</option>
                                <option value="heart">Heart</option>
                            </select>
                        </div>
                    </div>
                </div>
            
                <div class="field column">
                    <label class="label">Niveau</label>
                    <div class="control">
                        <div class="select">
                            {
                                choice == "texte" || choice == undefined ?(
                                    <select onChange={(e) => {setLevel(e.target.value)}}>
                                        <option value="A1">A1</option>
                                        <option value="A2">A2</option>
                                        <option value="B1">B1</option>
                                        <option value="B2">B2</option>
                                        <option value="C1">C1</option>
                                        <option value="C2">C2</option>
                                    </select>
                                ):(
                                    <select onChange={(e) => {setLevel(e.target.value)}}>
                                        <option value="0" >0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Information Supplémentaire</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Par exemple le TOEC, CLES..." value={infoPlus} onChange={(e) => {setInfoPlus(e.target.value)}}/>
                </div>
            </div>
        </>
    )
};

export default FormLangue;