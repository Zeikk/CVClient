import React, { useContext, useState } from 'react';
import UserContext from "../../components/UserContext"

const ButtonImport = () => {

    const {
        content,
        content_formation,
        content_ExperiencePro,
        updateformValue
    } = useContext(UserContext);

    function importerFichier() {
        if (typeof window !== 'undefined') {
            let fichierChoisi = document.getElementById("fileInput").files;

            if (fichierChoisi.length != 0 && fichierChoisi[0].type == "application/json") {

                let lecture = new FileReader();
                lecture.readAsText(fichierChoisi[0]);
                let fichierJson;

                lecture.onload = () => {
                    fichierJson = lecture.result;
                    fichierJson = JSON.parse(fichierJson);
                    for(const [key,value] of Object.entries( fichierJson )){
                        
                        if(Array.isArray(value)){
                            if(key == "content"){
                                updateformValue(key, new Array(Object.values(value)))
                            }
                            else{
                                updateformValue(key, Object.values(value))
                            }
                        }
                        else{
                            updateformValue(key, value)
                        }
                    }

                    //Nécessaire de rappeler ces 2 fonctions pour remplir les champs sinon champs restent vides car valeur pas encore rempli
                    updateformValue("about_permisDeConduire_text", fichierJson.about_permisDeConduire_text)
                    updateformValue("about_dateDeNaissance_text", fichierJson.about_dateDeNaissance_text)

                };
            }
        }
    }
    return (
        <>
            <input type="file" id="fileInput" onChange={() => importerFichier()} accept=".json" hidden />
            <div className="column is-3 is-centered" onClick={() => document.getElementById("fileInput").click()}>
                <div className="field is-grouped">
                    <div className="control">
                        <button class="button is-outlined">
                            <span class="icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span>Importer JSON</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ButtonImport;