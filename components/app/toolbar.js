import React, { useContext } from 'react';
import UserContext from "../UserContext";


function ToolbarItem({name, icon }) {
    const {
        sectionSelect,
        updatesectionSelect
    } = useContext(UserContext);
    return (
        <div className="columns is-centered" id={name}>
            <div
                className={sectionSelect == name ? "column has-text-centered is-vcentered box-toolbar box-toolbar-selected" : "column has-text-centered is-vcentered box-toolbar"}
                onClick={() => (updatesectionSelect(name))}
            >
                <i className={`fas ${icon}`} style={{ margin: "0" }}></i>
                <p>{name.toUpperCase()}</p>
            </div>
        </div>
    )
}

const toolbar = () => {
    return (
        <div className="column is-2">
            <ToolbarItem name="À Propos" icon="fa-user" />
            <ToolbarItem name="Contenu" icon="fa-edit" />
            <ToolbarItem name="Design" icon="fa-pencil-ruler" />
        </div>
    );
};


export default toolbar;