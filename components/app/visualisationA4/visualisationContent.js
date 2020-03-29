import React, { useContext } from 'react';
import UserContext from "../../UserContext"


const VisualisationContent = props => {
    const {
        content_ExperiencePro,
        content_formation,
        content_resume,
        content_projet,
        content_certification,
        policeSize
    } = useContext(UserContext)

    const styleFont={ 
        fontSize: `${policeSize}`
    }

    const { content } = props
    console.log("police size : "+policeSize);
    return (
        <div>{
        content &&
        content.map((section) => (
            section.name === "Résumé" ? (
                <>
                    <div key={section.name} className="columns is-vcentered section-name">
                        <div className="column is-2">
                            <h2 className="title-section-part has-text-weight-bold" style={{fontSize:policeSize+2}}>Profil</h2>
                        </div>
                        <div className="column is-10">
                            <hr style={{ backgroundColor: "#333" }} />
                        </div>
                    </div>
                    <div className="content">
                        <p className="p-min">
                            {content_resume[0].resume}
                        </p>
                    </div>
                </>
            ) :
                section.name === "Formation" ? (
                    <>
                        <div key={section.name} className="columns is-vcentered section-name">
                            <div className="column is-2" style={{ padding: "0" }}>
                                <h2 className="title-section-part has-text-weight-bold" style={styleFont} >Formations</h2>
                            </div>
                            <div className="column is-10">
                                <hr style={{ backgroundColor: "#333" }} />
                            </div>
                        </div>
                        {
                            content_formation.map((item) =>
                                <>
                                    <div key={item.name} className="part-element-section-min">
                                        <div className="part-element-section-datetitle-min">
                                            <div className="part-element-section-title-min">
                                                <p>{item.nameDegree} | {item.nameSchool}</p>
                                            </div>
                                            <div className="part-element-section-date-min">
                                                <p>{item.dateDebut} - {item.dateFin}</p>
                                            </div>
                                        </div>
                                        <div className="part-element-section-lieu-min">
                                            <p>{item.ville} , {item.pays}</p>
                                        </div>
                                        <div className="part-element-section-description-min">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </>
                ) :
                    section.name === "Expérience Professionnelle" ? (
                        <>
                            <div className="columns is-vcentered section-name">
                                <div className="column is-7" style={{ padding: "0" }}>
                                    <h2 className="title-section-part has-text-weight-bold" style={styleFont}>Expérience Professionnelle</h2>
                                </div>
                                <div className="column is-5">
                                    <hr style={{ backgroundColor: "#333" }} />
                                </div>
                            </div>
                            {
                                content_ExperiencePro.map((item) =>
                                    <>
                                        <div className="part-element-section-min">
                                            <div className="part-element-section-datetitle-min">
                                                <div className="part-element-section-title-min">
                                                    <p>{item.namePoste} | {item.nameEntreprise}</p>
                                                </div>
                                                <div className="part-element-section-date-min">
                                                    <p>{item.dateDebut} - {item.dateFin}</p>
                                                </div>
                                            </div>
                                            <div className="part-element-section-lieu-min">
                                                <p>{item.ville} , {item.pays}</p>
                                            </div>
                                            <div className="part-element-section-description-min">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </>
                    )
                        :
                        (
                            section.name === "Projet" ? (
                                <>
                                    <div className="columns is-vcentered section-name">
                                        <div className="column is-1" style={{ padding: "0" }}>
                                            <h2 className="title-section-part has-text-weight-bold">Projets</h2>
                                        </div>
                                        <div className="column is-11">
                                            <hr style={{ backgroundColor: "#333" }} />
                                        </div>
                                    </div>
                                    {
                                        content_projet.map((item) =>
                                            <>
                                                <div className="part-element-section-min">
                                                    <div className="part-element-section-datetitle-min">
                                                        <div className="part-element-section-title-min">
                                                            <p>{item.nameProject}</p>
                                                        </div>
                                                        <div className="part-element-section-date-min">
                                                            <p>{/*item.dateDebut*/} - {/*item.dateFin*/}</p>
                                                        </div>
                                                    </div>
                                                    <div className="part-element-section-description-min">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            )
                                :
                                (
                                    section.name === "Certification" && (
                                        <>
                                            <div className="columns is-vcentered section-name">
                                                <div className="column is-2" style={{ padding: "0" }}>
                                                    <h2 className="title-section-part has-text-weight-bold">Certification</h2>
                                                </div>
                                                <div className="column is-10">
                                                    <hr style={{ backgroundColor: "#333" }} />
                                                </div>
                                            </div>
                                            {
                                                content_certification.map((item) =>
                                                    <>
                                                        <div className="part-element-section-min">
                                                            <div className="part-element-section-datetitle-min">
                                                                <div className="part-element-section-title-min">
                                                                    <p>{item.nameCertification}</p>
                                                                </div>
                                                                <div className="part-element-section-date-min">
                                                                    <p>{/*item.dateDebut*/} - {/*item.dateFin*/}</p>
                                                                </div>
                                                            </div>
                                                            <div className="part-element-section-description-min">
                                                                <p>{item.infoPlus}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                                )
                        ))
                   
        )}
        </div>
    )
}

export default VisualisationContent;