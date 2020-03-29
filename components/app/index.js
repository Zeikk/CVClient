import React, { useContext } from 'react';
import Toolbar from "./toolbar"
import VisualisationA4 from "./visualisationA4"
import AboutForm from "./aboutForm"
import ContentForm from "../content"
import DesignForm from "./designForm"
import UserContext from '../UserContext'

const dashboard = () => {

    const {
        sectionSelect,
    } = useContext(UserContext);

    return (
        <>
            <div className="columns" style={{ marginTop: "10px" }}>
                <Toolbar />
                {
                    sectionSelect === "À Propos" ?
                        <AboutForm />
                        :
                        sectionSelect === "Contenu" ?
                            <ContentForm />
                            :
                            <DesignForm />
                }
                <VisualisationA4 />
            </div>
        </>
    );
}


export default dashboard;