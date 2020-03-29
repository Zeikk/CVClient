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
    } = data;
    return(
        <div className="info-cv-min" style={{ backgroundColor: colorHeader, "overflow-wrap": "break-word" }}>
            {
                photo &&
                <div align="center">
                    <figure className={`image ${pictureSize}`}>
                        <img className={pictureShape} src={photo} id="visuPhoto" />
                    </figure>
                </div>
            }
            <h2 className="name-section-min" id="nom">{nom}</h2>
            <h2 className="name-section-min" id="prenom">{prenom}</h2>
            <div className="info-cv-content-min">
                <div className="info-cv-content-element-min">
                    <i className="k-icon k-i-marker-pin"></i>
                    <p className="p-min" id="adresse">{adresse}, {ville} {postal}</p>
                </div>
                <div className="info-cv-content-element-min">
                    <img src="../../static/images/phone.png" alt="iconPhone" />
                    <p className="p-min" id="tel2"></p><p className="p-min" id="tel">{tel}</p>
                </div>
                <div className="info-cv-content-element-min">
                    <i className="k-icon k-i-email"></i>
                    <p className="p-min" id="mail" style={{ width: "80px", "overflow-wrap": "break-word" }}>{mail}</p>
                </div>
                {
                    about_dateDeNaissance_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-calendar"></i>
                            <p className="p-min" id="dateNaissance">{about_dateDeNaissance_text}</p>
                        </div>
                    )
                }
                {
                    about_facebook_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-facebook"></i>
                            <p className="p-min" id="facebook">{about_facebook_text}</p>
                        </div>
                    )
                }
                {
                    about_linkedin_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-linkedin"></i>
                            <p className="p-min" id="facebook">{about_linkedin_text}</p>
                        </div>
                    )
                }
                {
                    about_instagram_text != "" && (
                        <div className="info-cv-content-element-min">
                            <img src="../../static/images/instagram.png" alt="iconInstagram" />
                            <p className="p-min" id="instagram">{about_instagram_text}</p>
                        </div>
                    )
                }
                {
                    about_twitter_text != "" && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-twitter"></i>
                            <p className="p-min" id="facebook">{about_twitter_text}</p>
                        </div>
                    )
                }
                {
                    about_github_text != "" && (
                        <div className="info-cv-content-element-min">
                            <img src="../../static/images/github.png" alt="iconGithub" />
                            <p className="p-min" id="facebook">{about_github_text}</p>
                        </div>
                    )
                }
                {
                    about_siteWeb_text && (
                        <div className="info-cv-content-element-min">
                            <i className="k-icon k-i-hyperlink"></i>
                            <a className="p-min has-text-white" href={about_siteWeb_text} >{about_siteWeb_text}</a>
                        </div>
                    )
                }
                {
                    about_permisDeConduire_text && (
                        <div className="info-cv-content-element-min">
                            <p className="p-min" >{about_permisDeConduire_text}</p>
                        </div>
                    )
                }
                <VisualisationContentLateral content={content} />
            </div>
        </div>
    );
};

export default SectionaboutLateral;