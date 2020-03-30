/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import React, { useContext } from 'react';
import UserContext from "../../UserContext"

const VisualisationContent = props => {
    const {
        content_ExperiencePro,
        content_formation,
        content_resume,
        content_projet,
        content_certification,
        policeSizeTitle, 
        policeSizeSubTitle,
        policeSizeContent,
        espacement
    } = useContext(UserContext)
  

    const { content } = props
    return (
        <div>{
        content &&
        content.map((section) => (
            section.name === "Résumé" ? (
                <>
                    <div key={section.name} className="columns is-vcentered section-name" style={{marginTop: espacement+`px`}}>
                        <div className="column is-2">
                            <h2 className="title-section-part has-text-weight-bold" style={{fontSize:policeSizeTitle+`px`, float: "right"}}>Profil</h2>
                        </div>
                        <div className="column is-10">
                            <hr style={{ backgroundColor: "#333" }} />
                        </div>
                    </div>
                    <div style={{marginTop: espacement+`px`}}>
                        <p style={{fontSize: policeSizeContent+`px`}}>
                            {content_resume[0].resume}
                        </p>
                    </div>
                </>
            ) :
                section.name === "Formation" ? (
                    <>
                        <div key={section.name} className="columns is-vcentered section-name" style={{marginTop: espacement+`px`}}>
                            <div className="column is-2" style={{ padding: "0" }}>
                                <h2 className="title-section-part has-text-weight-bold" style={{fontSize: policeSizeTitle+`px`}}>Formations</h2>
                            </div>
                            <div className="column is-10">
                                <hr style={{ backgroundColor: "#333" }} />
                            </div>
                        </div>
                        {
                            content_formation.map((item) =>
                                <>
                                    <div key={item.name} className="part-element-section-min" style={{marginTop: espacement+`px`}}>
                                        <div className="part-element-section-datetitle-min">
                                            <div style={{fontSize: policeSizeSubTitle+`px`}}>
                                                <p className="has-text-weight-semibold">{item.nameDegree} | {item.nameSchool}</p>
                                            </div>
                                            <div className="part-element-section-date-min">
                                                <p>{item.dateDebut} - {item.dateFin}</p>
                                            </div>
                                        </div>
                                        <div className="part-element-section-lieu-min">
                                            <p>{item.ville} , {item.pays}</p>
                                        </div>
                                        <div style={{fontSize: policeSizeContent+`px`}}>
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
                            <div className="columns is-vcentered section-name" style={{marginTop: espacement+`px`}}>
                                <div className="column is-7" style={{ padding: "0" }}>
                                    <h2 className="title-section-part has-text-weight-bold"  style={{fontSize: policeSizeTitle+`px`}}>Expérience Professionnelle</h2>
                                </div>
                                <div className="column is-5">
                                    <hr style={{ backgroundColor: "#333" }} />
                                </div>
                            </div>
                            {
                                content_ExperiencePro.map((item) =>
                                    <>
                                        <div className="part-element-section-min" style={{marginTop: espacement+`px`}}>
                                            <div className="part-element-section-datetitle-min">
                                                <div style={{fontSize: policeSizeSubTitle+`px`}}>
                                                    <p className="has-text-weight-semibold">{item.namePoste} | {item.nameEntreprise}</p>
                                                </div>
                                                <div className="part-element-section-date-min">
                                                    <p>{item.dateDebut} - {item.dateFin}</p>
                                                </div>
                                            </div>
                                            <div className="part-element-section-lieu-min">
                                                <p>{item.ville} , {item.pays}</p>
                                            </div>
                                            <div style={{fontSize: policeSizeContent+`px`}}>
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
                                    <div className="columns is-vcentered section-name" style={{marginTop: espacement+`px`}}>
                                        <div className="column is-1" style={{ padding: "0" }}>
                                            <h2 className="title-section-part has-text-weight-bold"  style={{fontSize: policeSizeTitle+`px`}}>Projets</h2>
                                        </div>
                                        <div className="column is-11">
                                            <hr style={{ backgroundColor: "#333" }} />
                                        </div>
                                    </div>
                                    {
                                        content_projet.map((item) =>
                                            <>
                                                <div className="part-element-section-min" style={{marginTop: espacement+`px`}}>
                                                    <div className="part-element-section-datetitle-min">
                                                        <div style={{fontSize: policeSizeSubTitle+`px`}}>
                                                            <p className="has-text-weight-semibold">{item.nameProject}</p>
                                                        </div>
                                                        <div className="part-element-section-date-min">
                                                            <p>{/*item.dateDebut*/} - {/*item.dateFin*/}</p>
                                                        </div>
                                                    </div>
                                                    <div style={{fontSize: policeSizeContent+`px`}}>
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
                                            <div className="columns is-vcentered section-name" style={{marginTop: espacement+`px`}}>
                                                <div className="column is-2" style={{ padding: "0" }}>
                                                    <h2 className="title-section-part has-text-weight-bold"  style={{fontSize: policeSizeTitle+`px`}}>Certification</h2>
                                                </div>
                                                <div className="column is-10">
                                                    <hr style={{ backgroundColor: "#333" }} />
                                                </div>
                                            </div>
                                            {
                                                content_certification.map((item) =>
                                                    <>
                                                        <div className="part-element-section-min" style={{marginTop: espacement+`px`}}>
                                                            <div className="part-element-section-datetitle-min">
                                                                <div style={{fontSize: policeSizeSubTitle+`px`}}>
                                                                    <p className="has-text-weight-semibold">{item.nameCertification}</p>
                                                                </div>
                                                                <div className="part-element-section-date-min">
                                                                    <p>{/*item.dateDebut*/} - {/*item.dateFin*/}</p>
                                                                </div>
                                                            </div>
                                                            <div style={{fontSize: policeSizeContent+`px`}}>
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