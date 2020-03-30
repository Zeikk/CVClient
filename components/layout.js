/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/
import React, {useState, useContext} from 'react'
import Header from './header';
import Footer from './footer';
import Head from 'next/head'
import '../styles/index.sass'
import arrayMove from 'array-move';
import UserContext from './UserContext'
import retranscription from '../control/traitement'

const Layout = props => {
  const {
      sectionSelect,
      colorHeaderInitial,
      colorContentInitial,
      pictureSizeInitial,
      policeInitial,

      policeSizeTitleInitial,
      policeSizeSubTitleInitial,
      policeSizeContentInitial,
      policeSizeTitleNameInitial,
    
      espacementInitial,
      isLogInitial,
      idInitial,
      espacementLateralInitial,
      sectionaboutLateralInitial
  } = useContext(UserContext);

  const [sectionChosit, setSectionChosit] = useState(sectionSelect);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [postal, setPostal] = useState("");
  const [ville, setVille] = useState("");
  const [adresse, setAdresse] = useState("");
  const [colorHeader, setcolorHeader] = useState(colorHeaderInitial);
  const [colorContent, setcolorContent] = useState(colorContentInitial);
  const [sectionaboutLateral, setSectionaboutLateral] = useState(sectionaboutLateralInitial);

  const [pictureSize, setpictureSize] = useState(pictureSizeInitial);
  const [pictureShape, setpictureShape] = useState("");
  const [police, setPolice] = useState(policeInitial);

  const [policeSizeTitle, setPoliceSizeTitle] = useState(policeSizeTitleInitial);
  const [policeSizeSubTitle, setPoliceSizeSubTitle] = useState(policeSizeSubTitleInitial);
  const [policeSizeContent, setPoliceSizeContent] = useState(policeSizeContentInitial);
  const [policeSizeTitleName, setPoliceSizeTitleName] = useState(policeSizeTitleNameInitial);

  

  const [espacement, setEspacement] = useState(espacementInitial);
  const [espacementLateral, setEspacementLateral] = useState(espacementLateralInitial);


  const [content, setContent] = useState([]);
  const [content_ExperiencePro, setcontent_ExperiencePro] = useState([]);
  const [openExperience, setOpenExperience] = useState(true);
  const [content_formation, setcontent_formation] = useState([]);
  const [openFormation, setOpenFormation] = useState(true);
  const [content_langues, setcontent_langues] = useState([]);
  const [openLangue, setOpenLangue] = useState(true);
  const [content_projet, setcontent_projet] = useState([]);
  const [openProjet, setOpenProjet] = useState(true);
  const [content_competence, setcontent_competence] = useState([]);
  const [openCompetence, setOpenCompetence] = useState(true);
  const [content_loisirs, setcontent_loisirs] = useState([]);
  const [openLoisirs, setOpenLoisirs] = useState(true);
  const [content_certification, setcontent_certification] = useState([]);
  const [openCertification, setOpenCertification] = useState(true);
  const [content_resume, setcontent_resume] = useState([]);
  const [openResume, setOpenResume] = useState(true);


  const [about_dateDeNaissance, setabout_dateDeNaissance] = useState(false);
  const [dateNaissance, setDateNaissance] = useState("");
  const [about_dateDeNaissance_text, setabout_dateDeNaissance_text] = useState("");
  const [formatDate, setFormatDate] = useState('JJ/MM/YYYY')
  const [separateurDate, setSeparateurDate] = useState("/")

  const [about_siteWeb, setabout_siteWeb] = useState(false);
  const [about_siteWeb_text, setabout_siteWeb_text] = useState("");

  const [about_facebook, setabout_facebook] = useState(false);
  const [about_facebook_text, setabout_facebook_text] = useState("");

  const [about_linkedin, setabout_linkedin] = useState(false);
  const [about_linkedin_text, setabout_linkedin_text] = useState("");

  const [about_permisDeConduire, setabout_permisDeConduire] = useState(false);
  const [permisB, setPermisB] = useState(false);
  const [permisA, setPermisA] = useState(false);
  const [permisAM, setPermisAM] = useState(false);
  const [about_permisDeConduire_text, setabout_permisDeConduire_text] = useState("");

  const [about_instagram, setabout_instagram] = useState(false);
  const [about_instagram_text, setabout_instagram_text] = useState("");

  const [about_twitter, setabout_twitter] = useState(false);
  const [about_twitter_text, setabout_twitter_text] = useState("");

  const [about_github, setabout_github] = useState(false);
  const [about_github_text, setabout_github_text] = useState("");


  const [resume, setResume] = useState();
  const [photo, setPhoto] = useState("");
  const [addPhoto, setAddPhoto] = useState(true)

  const [isLog, setLog] = useState(isLogInitial)
  const [id, setId] = useState(idInitial)
  //const [isLoading, setLoading] = useState(false);

  function updatesectionSelect(value) {
      setSectionChosit(value);
  }

  function updateformValue(name, value) {
      switch (name) {
          //ABOUT PAGE
          case 'photo':
              setPhoto(value)
              setAddPhoto(false)
              break;
          case "nom":
              var newNom = retranscription(value, name, nom)
              setNom(newNom)
              break;
          case "prenom":
              var newPrenom = retranscription(value, name, prenom)
              setPrenom(newPrenom)
              break;
          case 'mail':
              var newMail = retranscription(value, name, mail)
              setMail(newMail)
              break;
          case 'tel':
              var newTel = retranscription(value, name, tel)
              if(newTel.charAt(0)!=0 && newTel.charAt(0)!=""){
                  document.getElementById("tel2").innerHTML = "+33"
              }
              else{
                  document.getElementById("tel2").innerHTML = ""
              }
              setTel(newTel)
              break;
          case 'postal':
              var newPostal = retranscription(value, name, postal)
              setPostal(newPostal)
              break;
          case 'ville':
              var newVille = retranscription(value, name, ville)
              setVille(newVille)
              break;
          case 'adresse':
              var newAdresse = retranscription(value, name, adresse)
              setAdresse(newAdresse)
              break;
          case 'about_dateDeNaissance':
              setabout_dateDeNaissance(value)
              break;
          case 'dateNaissance':
              setDateNaissance(value)
              var date = [value, formatDate, separateurDate]
              setabout_dateDeNaissance_text(retranscription(date, "about_dateDeNaissance_text", about_dateDeNaissance_text))
              break;
          case 'formatDate':
              setFormatDate(value)
              var date = [dateNaissance, value, separateurDate]
              setabout_dateDeNaissance_text(retranscription(date, "about_dateDeNaissance_text", about_dateDeNaissance_text))
              break;
          case 'separateurDate':
              setSeparateurDate(value)
              var date = [dateNaissance, formatDate, value]
              setabout_dateDeNaissance_text(retranscription(date, "about_dateDeNaissance_text", about_dateDeNaissance_text))
              break;
          case 'about_dateDeNaissance_text':
              setabout_dateDeNaissance_text(value)
              break;
          case 'about_siteWeb':
              setabout_siteWeb(value)
              break;
          case 'about_siteWeb_text':
              setabout_siteWeb_text(value)
              break;
          case 'about_facebook':
              setabout_facebook(value)
              break;
          case 'about_facebook_text':
              setabout_facebook_text(value)
              break;

          case 'about_linkedin':
              setabout_linkedin(value)
              break;
          case 'about_linkedin_text':
              setabout_linkedin_text(value)
              break;

          case 'about_permisDeConduire':
              setabout_permisDeConduire(value)
              break;
          case 'permisB':
              setPermisB(value)
              setabout_permisDeConduire_text(retranscription({'B': value, 'A': permisA, 'AM': permisAM},'about_permisDeConduire_text', about_permisDeConduire_text))
              break;
          case 'permisA':
              setPermisA(value)
              setabout_permisDeConduire_text(retranscription({'B': permisB, 'A': value, 'AM': permisAM},'about_permisDeConduire_text', about_permisDeConduire_text))
              break;
          case 'permisAM':
              setPermisAM(value)
              setabout_permisDeConduire_text(retranscription({'B': permisB, 'A': permisA, 'AM': value},'about_permisDeConduire_text', about_permisDeConduire_text))
              break;
          case 'about_permisDeConduire_text':
              setabout_permisDeConduire_text(value)
              break;
          case 'about_instagram':
              setabout_instagram(value)
              break;
          case 'about_instagram_text':
          setabout_instagram_text(value)
              break;

          case 'about_twitter':
              setabout_twitter(value)
              break;
          case 'about_twitter_text':
              setabout_twitter_text(value)
              break;

          case 'about_github':
              setabout_github(value)
              break;
          case 'about_github_text':
              setabout_github_text(value)
              break;
          //DESIGN PAGE
          case 'colorHeader':
              setcolorHeader(value)
              break;
          case 'colorContent':
              setcolorContent(value)
              break;
          case 'pictureSize':
              setpictureSize(value)
              break;
          case 'pictureShape':
              setpictureShape(value)
              break;
          case 'police':
              setPolice(value)
              break;
          case 'policeSizeTitle':
              setPoliceSizeTitle(value)
              break;
        case 'policeSizeSubTitle':
            setPoliceSizeSubTitle(value)
            break;
        case 'policeSizeContent':
            setPoliceSizeContent(value)
            break;
        case 'policeSizeTitleName':
            setPoliceSizeTitleName(value)
            break;

        case 'espacement':
            setEspacement(value)
            break;
        case 'espacementLateral':
                setEspacementLateral(value)
                break;

        case 'sectionaboutLateral':
            setSectionaboutLateral(value)
            break;

          //CONTENT PAGE
          case 'content_ExperiencePro':
              setcontent_ExperiencePro(value)
              break;

          case 'content_formation':
              setcontent_formation(value)
              break;
          case 'content_langues':
              value.forEach((langue) => {
                  langue['text'] = []

                  if(langue['choice'] == 'texte'){
                      langue['text'][0] = langue['level']
                  }
                  else{
                      for(var i=0; i<5; i++){
                          if(i<langue['level'])
                              langue['text'].push(<i class={`k-icon k-i-${langue['choice']}`}></i>)
                          else
                              langue['text'].push(<i class={`k-icon k-i-${langue['choice']}-outline`}></i>)
                      }
                  }
              })
              setcontent_langues(value)
              break;
          case 'content_projet':
              setcontent_projet(value)
              break;
          case 'content_competence':
              setcontent_competence(value)
              break;
          case 'content_loisirs':
              setcontent_loisirs(value)
              break;
          case 'content_certification':
              setcontent_certification(value)
              break;
          case 'content_resume':
              setcontent_resume(value)
              break;
          case 'content':
              if(value.length == 1)
                  setContent(value[0])
              else
                  setContent(arrayMove(content, value[0], value[1]));

              break;
          case 'removeContent':
              var i =0
              var find = false
              while(i<content.length && !find){
                  if(content[i].nameId == value)
                      find = true
                  else
                      i++
              }
              content.splice(i, 1)
              break;
      }
  }
  
  return(
      <div>
          <UserContext.Provider value={{
              sectionaboutLateral: sectionaboutLateral,
              setPhoto,
              addPhoto,
              photo: photo,
              nom: nom,
              prenom: prenom,
              sectionSelect: sectionChosit,
              mail: mail,
              tel: tel,
              postal: postal,
              ville: ville,
              adresse: adresse,

              about_dateDeNaissance: about_dateDeNaissance,
              dateNaissance: dateNaissance,
              about_dateDeNaissance_text: about_dateDeNaissance_text,
              formatDate: formatDate,
              separateurDate: separateurDate,

              about_siteWeb: about_siteWeb,
              about_siteWeb_text: about_siteWeb_text,
              about_facebook: about_facebook,
              about_facebook_text: about_facebook_text,
              about_linkedin: about_linkedin,
              about_linkedin_text: about_linkedin_text,
              about_permisDeConduire: about_permisDeConduire,
              permisB: permisB,
              permisA: permisA,
              permisAM: permisAM,
              about_permisDeConduire_text: about_permisDeConduire_text,
              about_instagram: about_instagram,
              about_instagram_text: about_instagram_text,
              about_twitter: about_twitter,
              about_twitter_text: about_twitter_text,
              about_github: about_github,
              about_github_text: about_github_text,

              content: content,

              content_resume: content_resume,
              openResume: openResume,
              setOpenResume,
              content_ExperiencePro: content_ExperiencePro,
              openExperience: openExperience,
              setOpenExperience,
              content_formation: content_formation,
              openFormation: openFormation,
              setOpenFormation,
              content_langues: content_langues,
              openLangue: openLangue,
              setOpenLangue,
              content_projet: content_projet,
              openProjet: openProjet,
              setOpenProjet,
              content_competence: content_competence,
              openCompetence: openCompetence,
              setOpenCompetence,
              content_loisirs: content_loisirs,
              openLoisirs: openLoisirs,
              setOpenLoisirs,
              content_certification: content_certification,
              openCertification: openCertification,
              setOpenCertification,

              isLog: isLog,
              setLog,
              id: id,
              setId,
              updatesectionSelect,
              updateformValue,
              setResume,
              resume: resume,

              colorContent: colorContent,
              colorHeader: colorHeader,
              pictureSize: pictureSize,
              pictureShape: pictureShape,
              police: police,

              policeSizeTitle: policeSizeTitle,
              policeSizeSubTitle: policeSizeSubTitle,
              policeSizeContent: policeSizeContent,
              policeSizeTitleName: policeSizeTitleName,

              espacement: espacement,
              espacementLateral: espacementLateral
          }
          }>
            <Head>
                <title>CV Creator</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            
                <link rel="stylesheet" href="animate.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
            </Head>
            <Header />
                {props.children}
            <Footer/>
            </UserContext.Provider>
      </div>
  );
  
  
}

export default Layout;
