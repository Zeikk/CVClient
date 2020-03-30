/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/


import React, { useContext } from 'react';
import UserContext from "../../UserContext"


const VisualisationContentLateral = (props) => {
    const {
        content_langues,
        content_competence,
        content_loisirs,
        espacement,
        policeSizeTitle,
        policeSizeTitleName,
        policeSizeContent,
    } = useContext(UserContext)

    const { content } = props

    return (
        <>{
            content &&
            content.map((section) => (
                section.name === "Langue" ? (
                <>
                <div className="columns is-vcentered" style={{ margin: "0", marginTop: espacement+`px`}}>
                    <div className="column has-text-right is-5" style={{ padding: "0" }}>
                        <h2 className="title-section-part has-text-weight-bold" style={{fontSize: policeSizeTitle+`px`, float: "left"}}>Langues</h2>
                    </div>
                    <div className="column" style={{ margin: "0" }}>
                        <hr style={{ backgroundColor: "#FFF", margin: "0" }} />
                    </div>
                </div>
                {
                    content_langues.map((item) =>
                        <p style={{
                            fontSize: policeSizeContent+'px',
                            fontWeight: "400",
                            padding: "0",
                            paddingLeft: "5px",
                            margin: "0"
                        }}>
                            {item.nameLanguage} {item.text}
                        </p>
                    )
                }
            </>
            ) :
                section.name === "Compétence" ? (
                    <>
                <div className="columns is-vcentered" style={{ margin: "0", marginTop: espacement+`px`}}>
                    <div className="column has-text-right is-5" style={{ padding: "0" }}>
                        <h2 className="title-section-part has-text-weight-bold" style={{fontSize: policeSizeTitle+`px`, float: "left"}}>Compétences</h2>
                    </div>
                    <div className="column" style={{ margin: "0", marginTop: espacement+`px`}}>
                        <hr style={{ backgroundColor: "#FFF", margin: "0" }} />
                    </div>
                </div>
                {
                    content_competence.map((item) =>
                        <div className="columns is-vcentered">
                            <div className="column has-text-right">
                                <p style={{
                                    fontSize: policeSizeContent+'px',
                                    fontWeight: "400",
                                    padding: "0",
                                    paddingLeft: "5px",
                                    margin: "0"
                                }}>
                                    {item.nameCompetence}
                                </p>
                            </div>
                            <div className="column">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                }
            </>
            )
                :
                (
                    section.name === "Loisirs" && (
                            <>
                <div className="columns is-vcentered" style={{ margin: "0", marginTop: espacement+`px`}}>
                    <div className="column has-text-right is-5" style={{ padding: "0" }}>
                        <h2 className="title-section-part has-text-weight-bold" style={{fontSize: policeSizeTitle+`px`, float: "left"}}>Loisirs</h2>
                    </div>
                    <div className="column" style={{ margin: "0", marginTop: espacement+`px`}}>
                        <hr style={{ backgroundColor: "#FFF", margin: "0" }} />
                    </div>
                </div>
                {
                    content_loisirs.map((item) =>
                        <p style={{
                            fontSize: policeSizeContent+'px',
                            fontWeight: "400",
                            padding: "0",
                            paddingLeft: "5px",
                            margin: "0"
                        }}>
                            {item.nameLoisir}
                        </p>
                    )
                }
            </>
            )
        )
))
             } </>
    );
}

export default VisualisationContentLateral;