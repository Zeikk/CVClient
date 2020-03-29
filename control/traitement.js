import * as Regex from './regex';

//Retourne l'affichage en fonction de la donnée saisie
const retranscription = (donneesSaisie, nomInput, donneesDepart) => {
    
	switch(nomInput){
            
            case 'tel':
                var donneeTraitee = ""
                var indiceDebutChaine
                var donneeDepartSansEspace = donneesDepart.replace(/ /g,"") //Suppression espace dans la chaine
                var numero = Regex.traitementNumero(donneesSaisie.replace(/ /g,"")) 

                if(numero!=false){
                    if(numero.charAt(0)!='0'){
                        indiceDebutChaine = 0
                    }
                    else {
                        indiceDebutChaine = 1
                        donneeTraitee += '0'
                    }
                    if(numero.length>donneeDepartSansEspace.length && numero.length<10+indiceDebutChaine){

                        if(numero.charAt(0)!='0'){
                            donneeTraitee += formatageNumeroTelephoneInternational(indiceDebutChaine, numero)
                        }else{
                            donneeTraitee += formatageNumeroTelephoneClassique(indiceDebutChaine, numero)
                        }
                    }
                    else{
                        if(numero.length>=10+indiceDebutChaine){
                            donneeTraitee = donneesDepart
                        }
                        else{
                            donneeTraitee = donneesDepart.substr(0, donneesDepart.length-1)
                        }
                    }
                }
                else{
                    if(donneesSaisie.length==0){
                        return ""
                    }
                    else
                        if(donneesSaisie.charAt(0)!='0'){
                            donneeTraitee = donneesDepart
                        }
                        else{
                            if(donneesSaisie.length==1){
                                donneeTraitee = '0'
                            }
                            else{
                                donneeTraitee = donneesDepart
                            }
                        }
                }

                return donneeTraitee;
                break;

            case 'postal':

                var codePostal = donneesSaisie.replace(/ /g,'')
                codePostal = Regex.traitementCodePostal(codePostal)
                if(codePostal != false){
                    return codePostal
                }
                else{
                    if(donneesSaisie.length==0)
                        return ""
                    else
                        return donneesDepart
                }
                break;

            case 'nom':
                var nom = Regex.traitementNom(donneesSaisie)
                if(nom != false){
                    
                    return nom
                }
                else{
                    if(donneesSaisie.length==0){
                        return ""
                    }
                    return donneesDepart
                }
                break;
            
            case 'prenom':
                var prenom = Regex.traitementPrenom(donneesSaisie)
                if(prenom != false){
                    return prenom
                }
                else{
                    if(donneesSaisie.length==0){
                        return ""
                    }
                    return donneesDepart
                }
                break;

            case 'ville':
                var ville = Regex.traitementVille(donneesSaisie)
                if(ville != false){
                    return ville
                }
                else{
                    if(donneesSaisie.length==0){
                        return ""
                    }
                    return donneesDepart
                }
                break;

            case 'adresse':
                var adresse = Regex.traitementAdresse(donneesSaisie)
                if(adresse != false){
                    return adresse
                }
                else{
                    if(donneesSaisie.length==0){
                        return ""
                    }
                    return donneesDepart
                }
            
            //donneesSaisie tableau avec [valeurDate, formatDate, separateurDate]
            case 'about_dateDeNaissance_text':
                if(donneesSaisie[0]){
                    var date = donneesSaisie[0].split('-')
                    var dateFinal
                    switch(donneesSaisie[1]){
                        case 'JJ/MM/YYYY':
                            dateFinal = date[2]+donneesSaisie[2]+date[1]+donneesSaisie[2]+date[0]
                            break
                        case 'MM/JJ/YYYY':
                            dateFinal = date[1]+donneesSaisie[2]+date[2]+donneesSaisie[2]+date[0]
                            break
                        case 'YYYY/MM/JJ':
                            dateFinal = date[0]+donneesSaisie[2]+date[1]+donneesSaisie[2]+date[2]
                            break
                    }
                     
                    return dateFinal
                }
                else
                    return ""  
    
            case 'about_permisDeConduire_text':
                var texte = "Permis"
                for(var permis in donneesSaisie){
                    if(donneesSaisie[permis]){
                        texte +=  " "+permis
                    }
                }
                if(texte == "Permis")
                    return ""
                else
                    return texte

            default: 
				return donneesSaisie; 
        }
}

export default retranscription

function formatageNumeroTelephoneClassique(indice, numero){
    var donneeTraitee = ""
    for(indice; indice<numero.length; indice++){
        if(indice%2!=0)
            donneeTraitee +=  numero.charAt(indice)+" "
        else
            donneeTraitee += numero.charAt(indice)
    }
    return donneeTraitee
}

function formatageNumeroTelephoneInternational(indice, numero){
    var donneeTraitee = ""
    for(indice; indice<numero.length; indice++){
        if(indice%2==0)
            donneeTraitee += numero.charAt(indice)+" "
        else
            donneeTraitee += numero.charAt(indice)
    }
    return donneeTraitee
}
/*function isTelephonePortable(numero){
    
    var regTelephonePortable = /^[0-9]?[0-9]*$/;

    if( regTelephonePortable.test(numero) ){
        return true;
    } 
    else {
        return false;
    }
}

function isCodePostal(code){

    var regCodePostal = /^[0-9]{0,5}$/;

    if(regCodePostal.test(code)){
        return true;
    }
    else{
        return false;
    }
}

function isTexte(texte){

    var regTexte = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{0,40}$/
    if(regTexte.test(texte)){
        return true;
    }
    else{
        return false;
    }
}

function isTexteComplet(texte){
    var regTexte = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{0,40}$/
    if(regTexte.test(texte)){
        return true;
    }
    else{
        return false;
    }
}*/
