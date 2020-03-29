import React, { useContext } from 'react';
import UserContext from "../../UserContext"


const VisualisationContentLateral = (props) => {
    const {
        content_langues,
        content_competence,
        content_loisirs,
    } = useContext(UserContext)

    const { content } = props

    const elementStyles = {
        fontSize: "10px",
        fontWeight: "400",
        padding: "0",
        paddingLeft: "5",
        margin: "0"
    };

    return (
        <>{
            content &&
            content.map((section) => (
                section.name === "Langue" ? (
                <>
                <div className="columns is-vcentered" style={{ margin: "0" }}>
                    <div className="column has-text-right is-5" style={{ padding: "0" }}>
                        <h2 className="title-section-part has-text-weight-bold">Langues</h2>
                    </div>
                    <div className="column" style={{ margin: "0" }}>
                        <hr style={{ backgroundColor: "#FFF", margin: "0" }} />
                    </div>
                </div>
                {
                    content_langues.map((item) =>
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p style={elementStyles}>{item.nameLanguage}</p>
                            </div>
                            <div className="column">
                                <p style={elementStyles}>{item.text}</p>
                            </div>
                        </div>
                    )
                }
            </>
            ) :
                section.name === "Compétence" ? (
                    <>
                <div className="columns is-vcentered" style={{ margin: "0" }}>
                    <div className="column has-text-right is-5" style={{ padding: "0" }}>
                        <h2 className="title-section-part has-text-weight-bold">Compétences</h2>
                    </div>
                    <div className="column" style={{ margin: "0" }}>
                        <hr style={{ backgroundColor: "#FFF", margin: "0" }} />
                    </div>
                </div>
                {
                    content_competence.map((item) =>
                        <div className="columns is-vcentered">
                            <div className="column has-text-right">
                                <p style={elementStyles}>{item.nameCompetence}</p>
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
                <div className="columns is-vcentered" style={{ margin: "0" }}>
                    <div className="column has-text-right is-5" style={{ padding: "0" }}>
                        <h2 className="title-section-part has-text-weight-bold">Loisirs</h2>
                    </div>
                    <div className="column" style={{ margin: "0" }}>
                        <hr style={{ backgroundColor: "#FFF", margin: "0" }} />
                    </div>
                </div>
                {
                    content_loisirs.map((item) =>
                        <div className="columns is-vcentered">
                            <div className="column has-text-right">
                                <p style={elementStyles}>{item.nameLoisir}</p>
                            </div>
                            <div className="column">
                                <p>{item.description}</p>
                            </div>
                        </div>
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