import React, { useEffect, useState} from 'react';
import axios from 'axios'

const FormExperiencePro = props => {
    const {number, item, onItemChange } = props
    
    const [namePoste, setNamePoste] = useState(item.namePoste);
    const [nameEntreprise, setNameEntreprise] = useState(item.nameEntreprise);
    const [ville, setVille] = useState(item.ville);
    const [pays, setPays] = useState(item.pays);
    const [description, setDescription] = useState(item.description);

    const [location, setLocation] = useState([]);
    const GET_LOCATIONS = 'https://geo.api.gouv.fr/communes?nom=';

    function getLocation(name){    
        axios(`${GET_LOCATIONS}${name}`, { params: {fields: "nom,codesPostaux", limit: 20, boost: "population"}})
        .then(({ data }) => { setLocation(data)})
        .catch(err => console.log(err)) 
    }

    
    useEffect(() => {
        onItemChange({
            namePoste,
            nameEntreprise,
            ville,
            pays,
            description,
        }, number)
    }, [namePoste, nameEntreprise, ville, pays,description])

    return(
        <>
        <div className="field">
                <label className="label">Nom du poste *</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Entrer le nom du poste" value={namePoste} onChange={(e) => {setNamePoste(e.target.value)}} />
                </div>
            </div>
            <div className="field">
                <label className="label">Nom de l'entreprise *</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Entrer le nom de l'entreprise" value={nameEntreprise} onChange={(e) => {setNameEntreprise(e.target.value)}} />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label">Ville *</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Entrer la ville" value={ville} onChange={(e) => {getLocation(e.target.value),setVille(e.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label">Pays</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Entrer le pays" value={pays} onChange={(e) => {setPays(e.target.value)}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns"> 
                <div className="column">
                {
                location.length > 0 && 
                   
                        <div className="select is-multiple" style={{width: "100%"}} >
                            <select multiple size="1" style={{width: "50%"}} >
                                {
                                    location.map((item, id) => (
                                        <option key={id} onClick={e => (setVille(e.target.value), setLocation([]))}>{item.nom}</option>
                                    ))
                                }
                            </select>
                        </div>
                    
                }
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <label className="label">Date de début</label>

                    <div className="columns">
                        <div className="column">
                            <div className="select">
                                <select>
                                    <option>Mois</option>
                                    <option>Janvier</option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className="select">
                                <select>
                                    <option>Année</option>
                                    <option>2019</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Date de fin</label>
                    <div className="columns">
                        <div className="column">
                            <div className="select">
                                <select>
                                    <option>Mois</option>
                                    <option>Janvier</option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className="select">
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
                    <textarea className="textarea" type="text" placeholder="Entrer une description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
            </div>
    </>
    )
};

export default FormExperiencePro;