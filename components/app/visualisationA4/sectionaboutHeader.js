/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/


import React,{useState} from 'react';

const SectionaboutHeader = ({ data }) => {

    const {
        policeSize,
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

    const style = {
        fontSize: `${policeSize}px`
    }
    console.log("policeSize csss : "+style.fontSize)
    return (
        <div className="columns is-vcentered" style={{ backgroundColor: colorHeader, "overflow-wrap": "break-word", margin: "0", color: "#FFF"}}>
            {
                photo &&

                <div className="column is-3">
                    <figure className={`image ${pictureSize}`}>
                        <img className={pictureShape} src={photo} id="visuPhoto" />
                    </figure>
                </div>
            }
            <div className="column is-5">
                <h2 style={style} id="prenom">{nom}</h2>
                <h2 style={style} id="nom">{prenom}</h2>
                <div className="info-cv-content-element-min">
                    <i className="k-icon k-i-marker-pin" style={{padding: "0"}}></i>
                    <p className="p-min" id="adresse">{adresse}, {ville} {postal}</p>
                </div>
                <div className="info-cv-content-element-min">
                    <img src="../../static/images/phone.png" alt="iconPhone" />
                    <p className="p-min" id="tel2" style={{paddingTop: "4px" }}></p><p className="p-min" id="tel" style={{paddingTop: "2px" }}>{tel}</p>
                </div>
                <div className="info-cv-content-element-min">
                    <i className="k-icon k-i-email" style={{padding: "0"}}></i>
                    <p className="p-min" id="mail" style={{"overflow-wrap": "break-word", paddingTop: "2px" }}>{mail}</p>
                </div>
            </div>
            <div className="column is-3">
                <div className="info-cv-content-min">
                    {
                        about_dateDeNaissance_text != "" && (
                            <div className="info-cv-content-element-min">
                                <i className="k-icon k-i-calendar" style={{padding: "0"}}></i>
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
                </div>
            </div>
        </div>
    );
};

export default SectionaboutHeader;/******
* Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
* Date :  2019/2020
* Description : CvCreator, DUT Informatique 
******/


import React,{useState} from 'react';

const SectionaboutHeader = ({ data }) => {

   const {
       policeSize,
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

   const style = {
       fontSize: `${policeSize}px`
   }
   console.log("policeSize csss : "+style.fontSize)
   return (
       <div className="columns is-vcentered" style={{ backgroundColor: colorHeader, "overflow-wrap": "break-word", margin: "0", color: "#FFF"}}>
           {
               photo &&

               <div className="column is-3">
                   <figure className={`image ${pictureSize}`}>
                       <img className={pictureShape} src={photo} id="visuPhoto" />
                   </figure>
               </div>
           }
           <div className="column is-5">
               <h2 style={style} id="prenom">{nom}</h2>
               <h2 style={style} id="nom">{prenom}</h2>
               <div className="info-cv-content-element-min">
                   <i className="k-icon k-i-marker-pin" style={{padding: "0"}}></i>
                   <p className="p-min" id="adresse">{adresse}, {ville} {postal}</p>
               </div>
               <div className="info-cv-content-element-min">
                   <img src="../../static/images/phone.png" alt="iconPhone" />
                   <p className="p-min" id="tel2" style={{paddingTop: "4px" }}></p><p className="p-min" id="tel" style={{paddingTop: "2px" }}>{tel}</p>
               </div>
               <div className="info-cv-content-element-min">
                   <i className="k-icon k-i-email" style={{padding: "0"}}></i>
                   <p className="p-min" id="mail" style={{"overflow-wrap": "break-word", paddingTop: "2px" }}>{mail}</p>
               </div>
           </div>
           <div className="column is-3">
               <div className="info-cv-content-min">
                   {
                       about_dateDeNaissance_text != "" && (
                           <div className="info-cv-content-element-min">
                               <i className="k-icon k-i-calendar" style={{padding: "0"}}></i>
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
               </div>
           </div>
       </div>
   );
};

export default SectionaboutHeader;