import React, { useEffect, useState} from 'react';
import UserContext from "../../../UserContext"

const FromProjet = props => {
    const {number, item, onItemChange } = props

    const [nameProject, setNameProject] = useState(item.nameProject);
    const [description, setDescription] = useState(item.description);
    
    useEffect(() => {
        onItemChange({
            nameProject,
            description
        }, number)
    }, [nameProject, description])

    return(
        <>  
                <div class="field">
                    <label class="label">Nom du projet*</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Entrer le nom du projet" value={nameProject} onChange={(e) => {setNameProject(e.target.value)}}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <label class="label">Date de début</label>

                        <div className="columns">
                            <div className="column">
                                <div class="select">
                                    <select>
                                        <option>Mois</option>
                                        <option>Janvier</option>
                                    </select>
                                </div>
                            </div>
                            <div className="column">
                                <div class="select">
                                    <select>
                                        <option>Année</option>
                                        <option>2019</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div div className="column">
                        <label class="label">Date de fin</label>
                        <div className="columns">
                            <div className="column">
                                <div class="select">
                                    <select>
                                        <option>Mois</option>
                                        <option>Janvier</option>
                                    </select>
                                </div>
                            </div>
                            <div className="column">
                                <div class="select">
                                    <select>
                                        <option>Année</option>
                                        <option>2019</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" type="text" placeholder="Entrer une description" value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
                    </div>
                </div>
        </>
    )
};

export default FromProjet;