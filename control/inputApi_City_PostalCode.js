import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import UserContext from '../components/UserContext'

const Autosuggest = () => {

    const {
        updateformValue,
        postal,
        ville
    } = useContext(UserContext)

    const [locations, setLocations] = useState([]);
    const [locationsCode, setLocationsCode] = useState([]);

    const GET_LOCATIONS = 'https://geo.api.gouv.fr/communes?nom=';
    const GET_LOCATIONSBYCODE  = "https://geo.api.gouv.fr/communes?codePostal=";

    function getLocations(name){    
        axios(`${GET_LOCATIONS}${name}`, { params: {fields: "nom,codesPostaux", limit: 20, boost: "population"}})
        .then(({ data }) => { setLocations(data)})
        .catch(err => console.log(err)) 
    }

    function getLocationsByCode(name){ 
        axios(`${GET_LOCATIONSBYCODE}${name}`, { params: {fields: "nom", limit: 20, boost: "population"}})
        .then(({ data }) => { setLocationsCode(data)})
        .catch(err => console.log(err)) 
    }

    return (
        <>
        {/* Input postal code*/}
            <div className="field">
                <label className="label">Code Postal *</label>
                <div className="control">
                    <input
                        className="input"
                        name="postal"
                        id="postal_code" 
                        placeholder="Code Postal  ..."
                        value={postal}
                        type="phone" 
                        placeholder="75000" 
                        onChange={e=> (getLocationsByCode(e.target.value), updateformValue("postal", e.target.value))}
                    >
                    </input>               
                </div>
            </div>

            {
                locationsCode.length > 0 &&
                <div className="select is-multiple" style={{width: "100%"}} >
                    <select multiple size="1" style={{width: "100%"}} >
                        {
                            locationsCode.map((item, id) => (
                                <option key={id} onClick={e => (updateformValue("ville", e.target.value), setLocationsCode([]))}>{item.nom}</option>
                            ))
                        }
                    </select>
                </div>
            }
            {/* Input city*/}
            <div className="field">
                <label className="label">Ville *</label>
                <div className="control">
                    <input
                        className="input"
                        name="ville" 
                        id="locality" 
                        placeholder="Ville ..."
                        value={ville}
                        onChange={e=> (updateformValue("ville", e.target.value), getLocations(e.target.value))}
                    >
                    </input>             
                </div>
            </div>
            {
                locations.length > 0 &&
                <div className="select is-multiple" style={{width: "100%"}} >
                    <select multiple style={{width: "100%"}} >
                        {
                            locations.map((item, id) => (
                                <option key={id} onClick={e => (updateformValue("ville", e.target.value), setLocations([]), updateformValue("postal", item.codesPostaux[0]))}>{item.nom}</option>
                            ))
                        }
                    </select>
                </div>
            }
            </>
    );
} 

export default Autosuggest