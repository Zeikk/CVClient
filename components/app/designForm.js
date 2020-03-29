import React, { useContext } from 'react';
import UserContext from "../UserContext"


function ButtonColor({ colorcode, classColor, variable, option}) {
    const {
        colorHeader,
        colorContent,
        updateformValue
    } = useContext(UserContext);

    const styles = {
        boutonColor: {
            width: "33px",
            height: "29px",
            backgroundColor: "transparent",
            margin: "inherit",
            border: "transparent",
        }
      }


    return (
            <div className="control">
                <a className={`button is-rounded ${classColor}`} onClick={() =>  updateformValue(variable, colorcode)}>
                    {
                    variable == "colorHeader" ?
                            <p>{colorHeader == colorcode && (<i className="fas fa-check" style={{ margin: "0" }}></i>)}</p>
                    :
                            <p>{colorContent == colorcode && (<i className="fas fa-check" style={{ margin: "0" }}></i>)}</p>
                    }
                
                    {
                        option && <input style={styles.boutonColor} type="color" onChange={(e) => updateformValue(variable, e.target.value)} />
                    }
                </a>

            </div>
    )
}

function PictureSize({ size, sizeLabel }) {
    const {
        pictureSize,
        updateformValue
    } = useContext(UserContext);
    return (
        <div className="control" onClick={() => updateformValue("pictureSize", size)}>
            <a className={pictureSize == size ? "button is-medium is-link" : "button is-medium"}>
                {sizeLabel}
            </a>
        </div>
    )
}

function PictureShape({ shape, shapeLabel }) {
    const {
        pictureShape,
        updateformValue
    } = useContext(UserContext);
    return (
        <div className="control" onClick={() => updateformValue("pictureShape", shape)}>
            <a className={pictureShape == shape ? "button is-medium is-link" : "button is-medium"}>
                <i className={`fas ${shapeLabel}`} style={{ margin: "0" }}></i>
            </a>
        </div>
    )
}
function PolicePage({ policeName, policeClass }) {
    const {
        police,
        updateformValue
    } = useContext(UserContext);
    return (
        <div className="control" onClick={() => updateformValue("police", policeClass)}>
            <a className={police == policeClass ? "button is-medium is-link" : "button is-medium"} style={{ fontFamily: `${policeClass}` }}>
                {policeName}
            </a>
        </div>
    )
}

function SliderBar({min, max, step, data, name, title, unite}){
    const{
        updateformValue,
    } = useContext(UserContext);
    const styles = {
        slider:{
            height: "30px",
            width: "100%",
            backgroundColor: "rgb(232, 232, 232)",
            WebkitAppearance: "none",
            WebkitTransition: ".2s"
        }
    }
 
    return(
        <>
            <label className="label" >{title} : {data} {unite}</label>
            <div class="slidecontainer">
                <div className="columns is-vcentered">
                    <div className="column">
                        <input type="range" min={min} max={max} step={step} value={data} onChange={e=>(updateformValue(name,e.target.value))} className="slider" id="myRange" style={styles.slider} />
                    </div>
                </div>
            </div>
        </>
    )
}

const designForm = () => {
    const {
        photo,
        espacement,
        policeSize,
        updateformValue
    } = useContext(UserContext);
    const styles = {
        slider:{
            height: "30px",
            width: "100%",
            backgroundColor: "rgb(232, 232, 232)",
            WebkitAppearance: "none",
            WebkitTransition: ".2s"
        }
    }
    return (
        <div className="column" style={{ height: "88vh", overflowX: "auto" }}>
            <div className="columns">
                <div className="column">
                    <div className="box">
                        <h1 className="title is-size-5">En-tête</h1>
                        <hr />
                        <label className="label">Alignement :</label>
                        <div className="field is-grouped is-grouped-multiline">

                            <p className="control">
                                <button className="button is-large" onClick={(e)=>(updateformValue('sectionaboutLateral','left'))}>
                                    <i className="fas fa-align-left" style={{ margin: "auto", marginLeft: "30px", marginRight: "30px"}}></i>
                                </button>
                            </p>
                            <p className="control">
                                <button className="button is-large" onClick={(e)=>(updateformValue('sectionaboutLateral','center'))}>
                                    <i className="fas fa-align-center" style={{ margin: "auto", marginLeft: "30px", marginRight: "30px" }}></i>
                                </button>
                            </p>
                            <p className="control">
                                <button className="button is-large" onClick={(e)=>(updateformValue('sectionaboutLateral','right'))}>
                                    <i className="fas fa-align-right" style={{ margin: "auto", marginLeft: "30px", marginRight: "30px" }}></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="box">
                        <h1 className="title is-size-5">Couleurs et Police</h1>
                        <hr />
                        <label className="label">Couleur partie Information :</label>
                        <div className="field is-grouped is-grouped-multiline">
                            <ButtonColor colorcode="#00c4a7" classColor="is-primary" variable="colorHeader" />
                            <ButtonColor colorcode="#3273dc" classColor="is-link" variable="colorHeader"/>
                            <ButtonColor colorcode="#ff3860" classColor="is-danger" variable="colorHeader"/>
                            <ButtonColor colorcode="whitesmoke" classColor="is-light" variable="colorHeader"/>
                            <ButtonColor colorcode="hsl(141, 71%, 48%)" classColor="is-success" variable="colorHeader"/>
                            <ButtonColor colorcode="#363636" classColor="is-dark" variable="colorHeader"/>
                            <ButtonColor colorcode="hsl(0, 0%, 48%)" classColor="has-background-grey" variable="colorHeader"/>
                            <ButtonColor colorcode="hsl(48,100%, 67%)" classColor="is-warning" variable="colorHeader"/>
                            <ButtonColor colorcode="00c4a7" classColor="is-new-color" variable="colorHeader" option="true"/>
                        </div>
                        <label className="label">Couleur de fond Contenu:</label>
                        <div className="field is-grouped is-grouped-multiline">
                            <ButtonColor colorcode="#00c4a7" classColor="is-primary" variable="colorContent" />
                            <ButtonColor colorcode="#3273dc" classColor="is-link" variable="colorContent"  />
                            <ButtonColor colorcode="#ff3860" classColor="is-danger" variable="colorContent"  />
                            <ButtonColor colorcode="whitesmoke" classColor="is-light" variable="colorContent"  />
                            <ButtonColor colorcode="hsl(141, 71%, 48%)" classColor="is-success" variable="colorContent" />
                            <ButtonColor colorcode="#363636" classColor="is-dark" variable="colorContent" />
                            <ButtonColor colorcode="hsl(0, 0%, 48%)" classColor="has-background-grey" variable="colorContent" />
                            <ButtonColor colorcode="hsl(48,100%, 67%)" classColor="is-warning" variable="colorContent" />
                            <ButtonColor colorcode="00c4a7" classColor="is-new-color"variable="colorContent" option="true" />
                        </div>
                        <hr />
                        <label className="label">Police :</label>
                        <div className="field is-grouped is-grouped-multiline">
                            <PolicePage policeName="Arial" policeClass='Arial' />
                            <PolicePage policeName="Verdana" policeClass='Verdana' />
                            <PolicePage policeName="Trebuchet MS" policeClass='Trebuchet MS' />
                            <PolicePage policeName="Arial Narrow" policeClass='Arial Narrow' />
                        </div>
                    </div>
                </div>
            </div>
            {
                photo &&
                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <h1 className="title is-size-5">Photo</h1>
                            <hr />
                            <label className="label">Taille de la photo :</label>
                            <div className="field is-grouped is-grouped-multiline">
                                <PictureSize size="is-64x64" sizeLabel="S" />
                                <PictureSize size="is-96x96" sizeLabel="M" />
                                <PictureSize size="" sizeLabel="L" />
                                <PictureSize size="is-128x128" sizeLabel="XL" />
                            </div>
                            <label className="label">Forme de la photo :</label>
                            <div className="field is-grouped is-grouped-multiline">
                                <PictureShape shape="" shapeLabel="fa-square-full" />
                                <PictureShape shape="is-rounded" shapeLabel="fa-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="columns">
                <div className="column">
                    <div className="box">
                        <h1 className="title is-size-5">Espacements</h1>
                        <hr />
                        <SliderBar min="8" max="18" step={1} data={policeSize} name="policeSize" title="Police" unite="px"/>
                        <SliderBar min={1} max={10} step={1} data={espacement} name="espacement" title="Espacement" unite=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default designForm;