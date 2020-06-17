import React, { useContext, useEffect } from 'react';
import Toolbar from "./toolbar"
import VisualisationA4 from "./visualisationA4"
import AboutForm from "./aboutForm"
import ContentForm from "../content"
import DesignForm from "./designForm"
import UserContext from '../UserContext'

const dashboard = () => {

    const {
        sectionSelect
    } = useContext(UserContext);

    var elementArray = [];
    var elementArray_1 = [];
    var elementArray_2 = [];
    var txt = [];
    var txt_1 = [];
    var txt_2 = [];
    var elToGo = [];
    var i = 0;

    useEffect(() => {

        if(localStorage.getItem('firstVisite') != 'true')
            main()

    }, [])

    function main() {
        load1st();
        creerCommentaire(elementArray[0], txt[0], elementArray, txt);
    }
    function suivant(param, plopArray, txtArray) {
        supprCommentaire();
        if (plopArray[param + 1] != undefined) {
            creerCommentaire(plopArray[param + 1], txtArray[param + 1], plopArray, txtArray);
        }
        else {
            nextPage();
        }
    }

    function nextPage() {
        switch (i) {
            case 0:
                 load2nd();
                i++;
                break;
            case 1:
                load3rd();
                i++;
                break;
            default:
                console.log("fin");
                break;
        }
    }

    function load2nd() {
        elToGo[0].click();
        elToGo.push(document.getElementById("Design").firstChild);
        elementArray_1.push(document.getElementById("ajoutContenu"));
        txt_1.push("10/13 : Voici le coeur de votre CV ce bouton vous premettra d'inscrire de nombreux éléments comme vos expériences, formations, langues etc...");
        creerCommentaire(elementArray_1[0],txt_1[0],elementArray_1,txt_1);
    }

    function load3rd() {
        elToGo[1].click();
        elementArray_2.push(document.getElementById("alignSideBar"));
        elementArray_2.push(document.getElementById("colorBox"));
        elementArray_2.push(document.getElementById("spaceBox"));
        txt_2.push("11/13 : Bienvenue sur la mise en forme de votre CV ici. Par exemple, vous avez la possibilité de choisir de quel côté la barre de renseignements apparaîtra !");
        txt_2.push("12/13 : Ceci est une color box, elle permet de changer la couleur de votre barre de renseignements, et aussi la police utilisée.");
        txt_2.push("13/13 : Et pour finir voici la tool box qui vous permet de choisir la taille de votre police et l'espacement entre les textes !");
        creerCommentaire(elementArray_2[0],txt_2[0],elementArray_2,txt_2);
        localStorage.setItem('firstVisite', 'true')
    }

    function load1st() {
        elementArray.push(document.getElementById("insertPhoto"));
        elementArray.push(document.getElementById("nomInsert"));
        elementArray.push(document.getElementById("prenomInsert"));
        elementArray.push(document.getElementById("emailInsert"));
        elementArray.push(document.getElementById("phoneInsert"));
        elementArray.push(document.getElementById("postalCodeInset"));
        elementArray.push(document.getElementById("cityInsert"));
        elementArray.push(document.getElementById("adressInsert"));
        elementArray.push(document.getElementById("facultativeInsert"));
        txt.push("1/13 : Le bouton photo, utilisez-le pour insérer une photo dans votre CV.");
        txt.push("2/13 : Champ nom, il est obligatoire de le renseigner afin de valider votre CV.");
        txt.push("3/13 : Champ prénom, également obligatoire de le renseigner afin de valider votre CV.");
        txt.push("4/13 : Champ email, obligatoire et important pour que votre recruteur puisse communiquer avec vous.");
        txt.push("5/13 : Champ télephone avec un pré-traitement. Par exemple si votre numéro est 06 07 08 09 10 alors il faudra écrire  6 07 08 09 10.");
        txt.push("6/13 : Champ code postal, il est obligatoire et génère automatiquement la ville correspondante.");
        txt.push("7/13 : Si votre code postale est entré correctement votre ville sera automatiquement inscrite.");
        txt.push("8/13 : On ne peut pas deviner votre rue donc vous allez devoir la rentrer manuellement =(");
        txt.push("9/13 : Ces boutons sont très important ! Ils vous permettent d'inscrire des informations supplémentaires sur vous comme votre permis par exemple !");
        elToGo.push(document.getElementById("Contenu").firstChild);
    }

    function creerCommentaire(elementParent, contenuComment, plopArray, txtArray) {

        var div = document.createElement('div');
        div.className = "notification is-link is-light commentaire";
        //elementParent.insertBefore(div, elementParent.firstChild);
        elementParent.appendChild(div);
        
        var newButtonDecline = document.createElement('button');
        var txtNode = document.createTextNode('x');
        newButtonDecline.appendChild(txtNode);
        newButtonDecline.className = "delete";
        newButtonDecline.addEventListener('click', function () {
            supprCommentaire();
        });

        div.appendChild(newButtonDecline);
        var newElementTxt = document.createElement('p');
        var text = document.createTextNode(contenuComment);
        newElementTxt.appendChild(text);
        newElementTxt.className="txtCommentaire";
        div.appendChild(newElementTxt);
        var newButtonAccept = document.createElement('button');
        var txtNode = document.createTextNode('Suivant');
        newButtonAccept.appendChild(txtNode);
        newButtonAccept.className = "button is-rounded";
        newButtonAccept.addEventListener('click', function () {
            suivant(plopArray.indexOf(elementParent), plopArray, txtArray);
        });

        div.appendChild(newButtonAccept);
        scrollTo(0, div.getBoundingClientRect().y - 100);
    }

    function supprCommentaire() {
        var js = document.getElementsByClassName("commentaire");
        for (var i = 0; i < js.length; i++) {
            js[i].parentNode.removeChild(js[i]);
        }
        localStorage.setItem('firstVisite', 'true')
    }

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