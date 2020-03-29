import React, { useContext,useState } from 'react';
import UserContext from "../UserContext"
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ExperiencePro from "./section/Experience"
import Formation from "./section/Formation"
import Langue from "./section/Langue"
import Projet from "./section/Projet"
import Competence from "./section/Competence"
import Loisirs from "./section/Loisirs"
import Certification from "./section/Certification"
import FormPersonalise from "./section/personalisation"
import FormResume from "./section/resume"

let actif = false;

const SortableItem = sortableElement(({ value }) => (
    value === "Résumé" ? <FormResume/> :
    value === "Expérience Professionnelle" ? <ExperiencePro/> :
    value === "Formation" ? <Formation/> :
    value === "Langue" ? <Langue/>: 
    value === "Projet" ? <Projet/> :
    value === "Compétence" ? <Competence/>:
    value === "Loisirs" ? <Loisirs/>:
    value === "Certification" ? <Certification/>:
    value === "Personalisé" && <FormPersonalise/>
));

const SortableContainer = sortableContainer(({children}) => {
    return <ul>{children}</ul>;
})


const contentForm = () => {
    const [modalActive, setmodalActive] = useState(false);  
    const {
        content,
        updateformValue,
        content_resume,
        content_competence,
        content_formation,
        content_langues,
        content_loisirs,
        content_certification,
        content_ExperiencePro,
        content_projet,
        firstVisite
    } = useContext(UserContext);
     

    const BoxContent = ({ name, icon, dataName, data}) => {
        return (
            actif = false,
            dataName == "content_resume" && (data.length != 0 )&& (actif = true),
            <div className="column is-6">
                <div 
                    className={actif ? "button is-large is-fullwidth is-link" : "button is-large is-fullwidth"} 
                    disabled={actif ? true : false}
                    onClick={() => (
                        !actif && (
                            
                            updateformValue(dataName, [...data, {}]), 
                            data.length == 0 &&(
                                content.push({name: name, nameId: dataName}), 
                                updateformValue('content', [content])
                            ),
                            setmodalActive(false)
                        ))
                        
                    } 
                >
                    <div className="columns is-vcentered">
                        <div className="column">
                            <i className={`fas ${icon} is-size-3`}></i>
                        </div>
                        <div className="column">
                            <p className="has-text-weight-bold is-size-6">{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
        updateformValue('content', [oldIndex, newIndex])
    }
    
    return (
        
        <div id="ajoutContenu" className="column" style={{ height: "88vh", overflowX: "auto" }}>
                <SortableContainer onSortEnd={onSortEnd}>
                    {

                        content.map((value,  index) => (
                            content.length !=0 &&
                            <SortableItem key={index} index={index} value={value.name} />
                        ))
                    }
                </SortableContainer>

            <a
                className="button is-fullwidth is-dark is-medium"
                style={{ marginTop: "50px" }}
                onClick={() => setmodalActive(true)}
            >
                + Ajouter du contenu
            </a>
            <div className={modalActive ? "modal is-active" : "modal"}>
                <div className="modal-background" onClick={() => setmodalActive(false)}></div>
                <div className="modal-content">
                    <div className="box">
                        <div className="columns is-multiline">
                            <BoxContent name="Résumé" icon="fa-poll-h" dataName="content_resume" data={content_resume}/>
                            <BoxContent name="Expérience Professionnelle" icon="fa-user-tie" dataName="content_ExperiencePro" data={content_ExperiencePro}/>
                            <BoxContent name="Formation" icon="fa-graduation-cap" dataName="content_formation" data={content_formation}/>
                            <BoxContent name="Langue" icon="fa-language" dataName="content_langues" data={content_langues}/>
                            <BoxContent name="Projet" icon="fa-tasks" dataName="content_projet" data={content_projet}/>
                            <BoxContent name="Compétence" icon="fa-star" dataName="content_competence" data={content_competence}/>
                            <BoxContent name="Loisirs" icon="fa-heart" dataName="content_loisirs" data={content_loisirs}/>
                            <BoxContent name="Certification" icon="fa-certificate" dataName="content_certification" data={content_certification}/>
                            <BoxContent name="Personalisé" icon="fa-plus" dataName="content_personalise"/>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setmodalActive(false)}></button>
            </div>
        </div>
    );
};


export default contentForm;