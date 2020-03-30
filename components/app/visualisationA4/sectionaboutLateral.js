/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/

import React from 'react';
import VisualisationContentLateral from './visualisationContentLateral'

const SectionaboutLateral = ({data}) => {
    const {
        nom,
        prenom,
        mail,
        tel,
        postal,
        adresse,
        ville,
        colorHeader,
        pictureSize,
        pictureShape,
        photo,
        content,
        about_dateDeNaissance_text,
        about_siteWeb_text,
        about_facebook_text,
        about_linkedin_text,
        about_permisDeConduire_text,
        about_instagram_text,
        about_twitter_text,
        about_github_text,
        espacementLateral,
        sectionaboutLateral,
        policeSizeTitleName,
        policeSizeContent,
    } = data;
    return(
        <div 
            className="info-cv-min" 
            style={{ 
                backgroundColor: colorHeader, 
                "overflow-wrap": "break-word",
                width: espacementLateral+'px', 
                float: sectionaboutLateral,
            }}
        >
            {
                photo &&
                <div align="center">
                    <figure className={`image ${pictureSize}`}>
                        <img className={pictureShape} src={photo} id="visuPhoto" />
                    </figure>
                </div>
            }
            <div align="center" style={{paddingTop:"5px"}}>
                <h2  style={{fontSize: policeSizeTitleName+'px'}} id="nom">{nom}</h2>
                <h2  style={{fontSize: policeSizeTitleName+'px'}} id="prenom">{prenom}</h2>
            </div>
            <div className="info-cv-content-min">
                <div className="info-cv-content-element-min">
                    <i className="k-icon k-i-marker-pin"></i>
                    <p style={{fontSize: policeSizeContent+'px'}}   id="adresse">{adresse}, {ville} {postal}</p>
                </div>
                <div className="info-cv-content-element-min">
                    <img src="../../static/images/phone.png" alt="iconPhone" />
                    <p style={{fontSize: policeSizeContent+'px'}} id="tel2"></p><p style={{fontSize: policeSizeContent+'px'}}  id="tel">{tel}</p>
                </div>
                <div className="info-cv-content-element-min">
                    <i className="k-icon k-i-email"></i>
                    <p id="mail" style={{ width: "80px", "overflow-wrap": "break-word", fontSize: policeSizeContent+'px'}}>{mail}</p>
                </div>
                {
                    about_dateDeNaissance_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-calendar"></i>
                            <p style={{fontSize: policeSizeContent+'px'}} id="dateNaissance">{about_dateDeNaissance_text}</p>
                        </div>
                    )
                }
                {
                    about_facebook_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-facebook"></i>
                            <p style={{fontSize: policeSizeContent+'px'}}  id="facebook">{about_facebook_text}</p>
                        </div>
                    )
                }
                {
                    about_linkedin_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-linkedin"></i>
                            <p style={{fontSize: policeSizeContent+'px'}}   id="facebook">{about_linkedin_text}</p>
                        </div>
                    )
                }
                {
                    about_instagram_text != "" && (
                        <div className="info-cv-content-element-min">
                            <img src="../../static/images/instagram.png" alt="iconInstagram" />
                            <p style={{fontSize: policeSizeContent+'px'}}  id="instagram">{about_instagram_text}</p>
                        </div>
                    )
                }
                {
                    about_twitter_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-twitter"></i>
                            <p style={{fontSize: policeSizeContent+'px'}} id="facebook">{about_twitter_text}</p>
                        </div>
                    )
                }
                {
                    about_github_text != "" && (
                        <div className="info-cv-content-element-min">
                            <img src="../../static/images/github.png" alt="iconGithub" />
                            <p style={{fontSize: policeSizeContent+'px'}} id="facebook">{about_github_text}</p>
                        </div>
                    )
                }
                {
                    about_siteWeb_text && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-hyperlink"></i>
                            <a className="has-text-white" style={{fontSize: policeSizeContent+'px'}}   href={about_siteWeb_text} >{about_siteWeb_text}</a>
                        </div>
                    )
                }
                {
                    about_permisDeConduire_text && (
                        <div className="info-cv-content-element-min">
                            <p style={{fontSize: policeSizeContent+'px'}} >{about_permisDeConduire_text}</p>
                        </div>
                    )
                }
                <VisualisationContentLateral content={content} />
            </div>
        </div>
    );
};

export default SectionaboutLateral;