import React, { useContext, useState} from 'react';
import UserContext from "../UserContext"
import Autosuggest from "../../control/inputApi_City_PostalCode"

function ButtonInfoSupp({ name, value, actif, icon}) {
    const {
        updateformValue
    } = useContext(UserContext);
    return (
        !actif && 
            <a 
                onClick={()=> updateformValue(value, true)} 
                className="button" 
                style={{marginTop:"5px", marginLeft:"5px"}}
            >
                <i className={`${icon}`}></i>{name}
            </a>
    )
}


const aboutForm = () => {
    const {
        nom,
        prenom,
        mail,
        tel,
        postal,
        adresse,
        ville,
        updateformValue,
        setPhoto,
        addPhoto,
        about_dateDeNaissance,
        dateNaissance,
        formatDate,
        separateurDate,
        about_siteWeb,
        about_siteWeb_text,
        about_facebook,
        about_facebook_text,
        about_linkedin,
        about_linkedin_text,
        about_permisDeConduire,
        about_permisDeConduire_text,
        permisA,
        permisB,
        permisAM,
        about_instagram,
        about_instagram_text,
        about_twitter,
        about_twitter_text,
        about_github,
        about_github_text,      
    } = useContext(UserContext);

    const [addPhotoHook, setAaddPhotoHook] = useState(addPhoto ? true : false);



    function importPhoto() {
    
        if (typeof window !== 'undefined') {
            let fichierChoisi = document.getElementById("insertPhoto").files;
            if (fichierChoisi.length != 0) {
    
                let lecture = new FileReader();
                lecture.readAsDataURL(fichierChoisi[0])
    
                lecture.onload = () => {
                    let fichierImage = lecture.result
                    //setPhoto(fichierImage)
                    updateformValue("photo", fichierImage)
                    setAaddPhotoHook(false)
                };
            }
        }
    }

    return (
        <div className="column" style={{ height: "88vh", overflowX: "auto" }}>
            <form className="formulaire">
                <div className="columns">
                    {
                        addPhotoHook ?
                        <div className="column is-4 is-4-tablet">
                            <div className="addPicture has-text-centered"  onClick={() => document.getElementById("insertPhoto").click()}>
                                <i className="fas fa-camera is-size-1 is-size-3-tablet is-size-1-mobile" style={{margin:"auto"}}></i> 
                                <p>Ajouter une photo</p>
                                <label className="file-label">
                                    <input className="file-input" type="file" name="insertPhoto" id="insertPhoto" accept="image/*" onChange={() => importPhoto()}/>   
                                </label>
                            </div>
                        </div>
                        :
                        <>
                            <div className="column is-4 is-4-tablet">
                                <div className="addPicture has-text-centered"  onClick={() => document.getElementById("insertPhoto").click()}>
                                    <i class="fas fa-user-edit is-size-1" style={{marginLeft: "25px"}}></i>  
                                    <p>Modifier la photo</p>
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="insertPhoto" id="insertPhoto" accept="image/*" onChange={() => importPhoto()}/>   
                                    </label>
                                </div>
                                <hr/>
                                <button className="button is-rounded" onClick={e => (updateformValue("photo", null), setAaddPhotoHook(true))}>Supprimer la photo</button>
                            </div>
                        </>
                    }


                        <div className="column is-8 is-6-tablet">
                            <div className="field">
                                <label className="label">Nom *</label>
                                <div className="control">
                                    <input name="nom" className="input" type="text" value={nom} onChange={event => updateformValue("nom", event.target.value)} placeholder="Nom" required />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Prenom *</label>
                                <div className="control">
                                    <input name="prenom" className="input" type="text" value={prenom} onChange={event => updateformValue("prenom", event.target.value)} placeholder="Prenom" required />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Email *</label>
                    <div className="control">
                        <input name="mail" className="input" value={mail} onChange={event => updateformValue("mail", event.target.value)} type="email" placeholder="exemple@gmail.com" />
                    </div>
                </div>

                <div className="field">

                    <label className="label">Numéro de téléphone *</label>

                    <div className="field is-horizontal">

                        <div className="field-body">
                            <div className="field is-expanded">
                                <div className="field has-addons">
                                    <p className="control">
                                        <a className="button is-static">
                                            +33
                                        </a>
                                    </p>
                                    <p className="control is-expanded">
                                        <input name="tel" className="input" value={tel} onChange={event => updateformValue("tel", event.target.value)} type="tel" placeholder="1 23 45 67 89" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Autosuggest/>

                <div className="field">
                    <label className="label">Adresse *</label>
                    <div className="control">
                        <input name="adresse" className="input" value={adresse} onChange={event => updateformValue("adresse", event.target.value)} type="phone" placeholder="1 impasse de l Eglise" />
                    </div>
                </div>
                {
                    about_dateDeNaissance && (
                        <div className="field">
                            
                            <div className="columns">
                                <div className="column">
                                    <label className="label">Date de naissance </label>
                                    <div className="control">
                                        <input className="input" type="date" style={{marginLeft:"10px"}} value={dateNaissance} onChange={(e) =>updateformValue('dateNaissance', e.target.value)} />
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label">Format </label>
                                    <div class="select">
                                        <select onChange={(e) => {updateformValue("formatDate", e.target.value)}}>
                                        {
                                                formatDate == 'JJ/MM/YYYY'?(
                                                    <option value='JJ/MM/YYYY' selected>JJ/MM/YYYY</option>
                                                ):(
                                                    <option value='JJ/MM/YYYY'>JJ/MM/YYYY</option>
                                                )
                                            }
                                            {
                                                formatDate == 'MM/JJ/YYYY'?(
                                                    <option value='MM/JJ/YYYY' selected>MM/JJ/YYYY</option>
                                                ):(
                                                    <option value='MM/JJ/YYYY'>MM/JJ/YYYY</option>
                                                )
                                            }
                                            {
                                                formatDate == 'YYYY/MM/JJ'?(
                                                    <option value='YYYY/MM/JJ' selected>YYYY/MM/JJ</option>
                                                ):(
                                                    <option value='YYYY/MM/JJ'>YYYY/MM/JJ</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label">Séparateur </label>
                                    <div class="select">
                                        <select onChange={(e) =>updateformValue('separateurDate', e.target.value)}>
                                            {
                                                separateurDate == '/'?(
                                                    <option value='/' selected>/</option>
                                                ):(
                                                    <option value='/'>/</option>
                                                )
                                            }
                                            {
                                                separateurDate == '-'?(
                                                    <option value='-' selected>-</option>
                                                ):(
                                                    <option value='-'>-</option>
                                                )
                                            }
                                            {
                                                separateurDate == '.'?(
                                                    <option value='.' selected>.</option>
                                                ):(
                                                    <option value='.'>.</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    about_permisDeConduire && (
                        <div className="field">
                            <label className="label">Permis de conduire </label>
                            <div className="field">
                                <label className="checkbox">
                                {
                                    permisB ? (
                                        <input type="checkbox" style={{marginLeft:"10px"}} onClick={(e) => updateformValue("permisB", !permisB)} checked/>
                                    ):
                                    (
                                        <input type="checkbox" style={{marginLeft:"10px"}} onClick={(e) => updateformValue("permisB", !permisB)} />
                                    )
                                }
                                Permis B
                                </label>
                                    
                                
                                <label className="checkbox">
                                {
                                    permisA ? (
                                        <input type="checkbox" style={{marginLeft:"10px"}} onClick={(e) => updateformValue("permisA", !permisA)} checked/>
                                    ):
                                    (
                                        <input type="checkbox" style={{marginLeft:"10px"}} onClick={(e) => updateformValue("permisA", !permisA)}/>
                                    )
                                }
                                    Permis A
                                </label>
                                <label className="checkbox">
                                {
                                    permisAM ? (
                                        <input type="checkbox" style={{marginLeft:"10px"}} onClick={(e) => updateformValue("permisAM", !permisAM)} checked/>
                                    ):
                                    (
                                        <input type="checkbox" style={{marginLeft:"10px"}} onClick={(e) => updateformValue("permisAM", !permisAM)}/>
                                    )
                                }
                                Permis AM
                                </label>
                            </div>
                        </div>
                    )
                }
                {
                    about_siteWeb && (
                        <div className="field">
                            <label className="label">Site web : </label>
                            <div className="control">
                                <input name="adresse" className="input" value={about_siteWeb_text} onChange={event => updateformValue("about_siteWeb_text", event.target.value)} type="phone" placeholder="https://www.cvcreator.com" />
                            </div>
                        </div>
                    )
                }
                {
                    about_facebook && (
                        <div className="field">
                            <label className="label">Facebook : </label>
                            <div className="control">
                                <input name="adresse" className="input" value={about_facebook_text} onChange={event => updateformValue("about_facebook_text", event.target.value)} type="phone" placeholder="cvcreator" />
                            </div>
                        </div>
                    )
                }
                {
                    about_linkedin && (
                        <div className="field">
                            <label className="label">Linkedin : </label>
                            <div className="control">
                                <input name="adresse" className="input" value={about_linkedin_text} onChange={event => updateformValue("about_linkedin_text", event.target.value)} type="phone" placeholder="@cvcreator" />
                            </div>
                        </div>
                    )
                }
                {
                    about_instagram && (
                        <div className="field">
                            <label className="label">Instagram : </label>
                            <div className="control">
                                <input name="adresse" className="input" value={about_instagram_text} onChange={event => updateformValue("about_instagram_text", event.target.value)} type="phone" placeholder="@cvcreator" />
                            </div>
                        </div>
                    )
                }
                {
                    about_twitter && (
                        <div className="field">
                            <label className="label">Twitter : </label>
                            <div className="control">
                                <input name="adresse" className="input" value={about_twitter_text} onChange={event => updateformValue("about_twitter_text", event.target.value)} type="phone" placeholder="@cvcreator" />
                            </div>
                        </div>
                    )
                }
                {
                    about_github && (
                        <div className="field">
                            <label className="label">Github : </label>
                            <div className="control">
                                <input name="adresse" className="input" value={about_github_text} onChange={event => updateformValue("about_github_text", event.target.value)} type="phone" placeholder="@cvcreator" />
                            </div>
                        </div>
                    )
                }

                
                <ButtonInfoSupp name="Date de Naissance" value="about_dateDeNaissance" actif={about_dateDeNaissance} icon="fas fa-calendar-alt"/>
                <ButtonInfoSupp name="Permis de conduire" value="about_permisDeConduire" actif={about_permisDeConduire} icon="fas fa-car"/>
                <ButtonInfoSupp name="Site Web" value="about_siteWeb" actif={about_siteWeb} icon="fas fa-link"/>
                <ButtonInfoSupp name="Facebook" value="about_facebook" actif={about_facebook} icon="fab fa-facebook-f"/>
                <ButtonInfoSupp name="LinkedIn" value="about_linkedin" actif={about_linkedin} icon="fab fa-linkedin"/>
                <ButtonInfoSupp name="Instagram" value="about_instagram" actif={about_instagram} icon="fab fa-instagram"/>
                <ButtonInfoSupp name="Twitter" value="about_twitter" actif={about_twitter} icon="fab fa-twitter"/>
                <ButtonInfoSupp name="Github" value="about_github" actif={about_github} icon="fab fa-github"/>
                
                
            </form>
        </div>
    );
};


export default aboutForm;