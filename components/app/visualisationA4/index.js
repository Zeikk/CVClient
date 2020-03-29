import React, { useContext, useState } from 'react'
import { PDFExport } from '@progress/kendo-react-pdf'
import '@progress/kendo-theme-default/dist/all.scss'
import UserContext from "../../UserContext"
import ButtonJSON from '../buttonJSON'
import ButtonImport from '../buttonImport'
import ButtonPDF from '../buttonPDF'
import ButtonPNG from '../buttonPNG'
import VisualisationContent from './visualisationContent'
import SectionaboutLateral from './sectionaboutLateral'
import SectionaboutHeader from './sectionaboutHeader'


const visualisationA4 = () => {
    const {
        colorContent,
        police,
        policeSize,
        setResume,
        content,
        sectionaboutLateral
    } = useContext(UserContext);

    const [modalDownload, setModalDownload] = useState(false);
    return (
        <div className="column">
            <h1 className="has-text-centered subtitle">Aperçu du document :</h1>
            <PDFExport paperSize={'auto'}
                fileName="CVcreator.pdf"
                title=""
                subject=""
                keywords=""
                producer="UTF-8"
                ref={(r) => setResume(r)}
            >
                <div className="pageA4" style={{ fontFamily: police, fontSize: policeSize, backgroundColor: colorContent, boxShadow: "#e8e8e8 9px 14px 7px" }}>
                    {sectionaboutLateral == "left" &&
                        <div id="pageA4" className="columns is-mobile pageA4" style={{ backgroundColor: colorContent }}>
                            <div className="column is-4" style={{ padding: "0", paddingTop: "0.75rem" }}>
                                <SectionaboutLateral data={useContext(UserContext)} />
                            </div>
                            <div className="column is-8">
                                <VisualisationContent content={content} />
                            </div>
                        </div>
                    }
                    {sectionaboutLateral == "right" &&
                        <div id="pageA4" className="columns is-mobile pageA4" style={{ backgroundColor: colorContent }}>
                            <div className="column is-8">
                                <VisualisationContent content={content} />
                            </div>
                            <div className="column is-4" style={{ padding: "0", paddingTop: "0.75rem" }}>
                                <SectionaboutLateral data={useContext(UserContext)} />
                            </div>
                        </div>
                    }
                    {sectionaboutLateral == "center" &&
                        <div id="pageA4" className="pageA4" style={{ backgroundColor: colorContent }}>
                            <SectionaboutHeader data={useContext(UserContext)} />
                            <VisualisationContent content={content} />
                        </div>
                    }
                </div>
            </PDFExport>
            <hr />
            <div className="has-text-centered" style={{ margin: "auto" }}>
                <div className="columns is-centered">
                    <div className="column is-3 is-centered">
                        <div className="field is-grouped">
                            <div className="control">
                                <button class="button is-outlined" onClick={() => (setModalDownload(!modalDownload))}>
                                    <span class="icon">
                                        <i class="fas fa-save"></i>
                                    </span>
                                    <span>Télécharger</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ButtonImport/>
                </div>
            </div>
            <div className={modalDownload ? "modal is-active" : "modal"}>
                <div className="modal-background" onClick={() => (setModalDownload(!modalDownload))}></div>
                <div className="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Télécharger le CV au format : </p>
                    </header>
                    <section className="modal-card-body">
                        <br />
                        <br />
                        <div className="columns is-centered">
                            <div className="column is-3 is-centered">
                                <ButtonJSON />
                            </div>
                            <div className="column is-3 is-centered">
                                <ButtonPDF />
                            </div>
                            <div className="column is-3 is-centered">
                                <ButtonPNG/>
                            </div>
                        </div>
                        <br />
                        <br />
                    </section>
                    <button class="modal-close is-large" aria-label="close" onClick={() => (setModalDownload(!modalDownload))}></button>
                </div>
            </div>
        </div>
    );
};

export default visualisationA4;