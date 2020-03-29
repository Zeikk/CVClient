
		function convertirMajuscule(chaine)
		{
			return chaine.toUpperCase();
		};
		
		function convertirCaractereSpecial(ch)
		{

			ch = ch.replace('#ý#s', 'y');
			ch = ch.replace('#Ý#s', 'Y');
			ch = ch.replace('#Æ#s','ae');
			ch = ch.replace('#æ#s','ae');
			ch = ch.replace('#Œ#s','oe');
			ch = ch.replace('#œ#s','oe');
			ch = ch.replace('#ñ#s','n');
			ch = ch.replace('#ŭ#i','u');
			ch = ch.replace('#Ŭ#i','u');
			ch = ch.replace('#ø#i','o');
			ch = ch.replace('#ã|å#', 'a');
			ch = ch.replace('#Ã|Å#', 'A');
			ch = ch.replace('#ð|õ|ø#s', 'o');
			ch = ch.replace('#Õ#', 'O');
			ch = ch.replace('#ũ#', 'u');
			ch = ch.replace('#Ũ#', 'U');
			return ch;
		}
		function convertirAccent(ch)
		{
			ch = ch.replace('#Ç#', 'C');
			ch = ch.replace('#ç#', 'c');
			ch = ch.replace('#è|é|ê|ë#', 'e');
			ch = ch.replace('#È|É|Ê|Ë#', 'E');
			ch = ch.replace('#à|á|â|ã|ä|å#', 'a');
			ch = ch.replace('#À|Á|Â|Ã|Ä|Å#', 'A');
			ch = ch.replace('#ì|í|î|ï#', 'i');
			ch = ch.replace('#Ì|Í|Î|Ï#', 'I');
			ch = ch.replace('#ð|ò|ó|ô|õ|ö|ø#s', 'o');
			ch = ch.replace('#Ò|Ó|Ô|Õ|Ö#', 'O');
			ch = ch.replace('#ũ|ù|ú|û|ü#', 'u');
			ch = ch.replace('#Ũ|Ù|Ú|Û|Ü#', 'U');
			ch = ch.replace('#Ÿ#', 'Y');
			ch = ch.replace('#ÿ#', 'y');
			return (ch);
		}
		function convertirAccentDebutMot(ch)
		{
			ch = ch.replace('#^Ç#', 'C');
			ch = ch.replace('#^ç#', 'c');
			ch = ch.replace('#^è|^é|^ê|^ë#', 'e');
			ch = ch.replace('#^È|^É|^Ê|^Ë#', 'E');
			ch = ch.replace('#^à|^á|^â|^ã|^ä|^å#', 'a');
			ch = ch.replace('#^À|^Á|^Â|^Ã|^Ä|^Å#', 'A');
			ch = ch.replace('#^ì|^í|^î|^ï#', 'i');
			ch = ch.replace('#^Ì|^Í|^Î|^Ï#', 'I');
			ch = ch.replace('#^ð|^ò|^ó|^ô|^õ|^ö|^ø#s', 'o');
			ch = ch.replace('#^Ò|^Ó|^Ô|^Õ|^Ö#', 'O');
			ch = ch.replace('#^ũ|^ù|^ú|^û|^ü#', 'u');
			ch = ch.replace('#^Ũ|^Ù|^Ú|^Û|^Ü#', 'U');
			return (ch);
			
		}
		function convertirMajusculePrenom(ch)
		{
			var prenom=ch.toLowerCase();
			prenom=positionnerMajusculeAuLimiteur(prenom,"-");
			prenom=positionnerMajusculeAuLimiteur(prenom," ");
			prenom=positionnerMajusculeAuLimiteur(prenom,"'");
			return prenom;
		}
		function convertirAdresse(ch){
			var tab = ch.split(' ')
			var adresse = ''
			for(var i=0; i<tab.length; i++){
				if(tab[i].length==0){
					adresse+= ' '
				}
				else{
					tab[i] = convertirMajusculePrenom(tab[i])
					adresse += ' '+tab[i]
				}
				
			}
			adresse = supprimerEspace(adresse)
			return adresse
			
		}
		function supprimerEspace(ch){
				ch = ch.replace(/[\s]{2,}/g, ' ');//Supprime doubles ou + espaces
				ch = ch.replace(/^[\s]/, "");//Espace début
				ch = ch.replace(/[\s]-|-[\s]/g, '-');//Supprime espace avant/après -
				ch = ch.replace(/[\s]'|'[\s]/g, "'");//Supprime espace avant/après '
				return ch;
		}
		function supprimerTiret(ch){
				ch = ch.replace(/^-{1,}/, '');//supprime tiret début
				ch = ch.replace(/-{2,}/g, '-');//Supprime doubles ou + tirets
				return ch;
		}
		function positionnerMajusculeAuLimiteur(ch,limiteur)
		{
			var tabPrenom = ch.split(limiteur);
			var prenom= "";
			for(var i=0; i<tabPrenom.length; i++){
				prenom+=majusculeDebut(tabPrenom[i]);
				if(i!=tabPrenom.length-1){
					prenom+=limiteur;
				}
			}
			return prenom;
		}
		function majusculeDebut(ch){
			var premiere = ch.substring(0,1);
			premiere = convertirAccentDebutMot(premiere);
			premiere = premiere.toUpperCase();
			var longueur = ch.length;
			return premiere+ch.substring(1,longueur);
		}
		/*
		*
		* VERFICATION CHAINE
		*
		*/
		function formatNomCorrect(chaine)
		{
			var modele= new RegExp("[a-zA-Z-\\'àâäçéèêëîïôöùûüÿÈÉÊËÒÓÔÕÖÌÍÎÏ\\s]");
			for(var i=0; i<chaine.length; i++){
				if(!modele.test(chaine[i]))
					return false
			}
			
			return true
		}
		function formatLocalitéCorrect(chaine)
		{
			var modele= new RegExp("[^a-zA-Z\-\'0-9àâäçéèêëîïôöùûüÿ]");
			if(modele.test(chaine))return true; //"caracteres non autorises presents";
			else return false; //"aucun caractere non autorise";
		}
		
		function formatPrenomCorrect(chaine)
		{	
			var modele= new RegExp("[a-zA-Z-\\'àâäçéèêëîïôöùûüÿÈÉÊËÒÓÔÕÖÌÍÎÏ\\s]");
			for(var i=0; i<chaine.length; i++){
				if(!modele.test(chaine[i]))
					return false
			}
			return true
		}

		function formatCodePostalCorrect(chaine){
			var tab = []
			if(chaine.length<=5){
				for(var i = 0; i<chaine.length; i++){
					if(i == 0){
						tab.push(chaine.charAt(0))
					}
					if(i == 1){
						tab.push(chaine.charAt(1))
					}
					if(i>1){
						if(i == 2){
							tab.push(chaine.charAt(i))
						}
						else{
							tab[2] += chaine.charAt(i)
						}
					}
				}
				if(codeFormatage(tab))
					return true
				else	
					return false
			}
			else 
			return false;
		}
		
		function formatChaineChiffreCorrect(chaine)
		{
			var modele= new RegExp('^[0-9]*$');
			chaine= chaine.replace(/ /g,"");
			if(modele.test(chaine))
				return true; //"caracteres non autorises presents";
			else
				return false; //"aucun caractere non autorise";
		}

		function codeFormatage(tab){
			var matchLettre = new RegExp("[0-9]|A|B{1}");
			
			if(tab.length == 3){
				return formatChaineChiffreCorrect(tab[0]) && matchLettre.test(tab[1]) && formatChaineChiffreCorrect(tab[2]) && tab[2].length<=3
			}
			else{
				
				if(tab.length == 2){
					return formatChaineChiffreCorrect(tab[0]) && matchLettre.test(tab[1])
				}
				else{
					if(tab.length == 1){
						return formatChaineChiffreCorrect(tab[0])
					}
				}
			}
		}
		
		function espaceCorrect(chaine)
		{
			var modele= new RegExp('\\s{2,}');
			if(modele.test(chaine))return false; //"espace non correct detecte";
			else return true; //"aucun espace non correct detecte";
		}
		
		function tiretCorrectNom(chaine)
		{
			var modele= new RegExp("^-$");
			if(modele.test(chaine)||countDoubleTirets(chaine)>3||verificationTiretApostrophe(chaine))
				return false; //"tiret non correct detecte";
			else 
				return true; //"aucun tiret non correct detecte";
		}
		function tiretCorrectPrenom(chaine)
		{
			var modele= new RegExp("^-$");

			if(modele.test(chaine)||countDoubleTirets(chaine)>2||verificationTiretApostrophe(chaine))
				return false;  //"tiret non correct detecte";
			else 
				return true; //"aucun tiret non correct detecte";
		}
		function tiretCorrectVille(chaine)
		{
			var modele= new RegExp("^-$");

			if(modele.test(chaine)||countDoubleTirets(chaine)>4||verificationTiretApostrophe(chaine))
				return false;  //"tiret non correct detecte";
			else 
				return true; //"aucun tiret non correct detecte";
		}
		function countDoubleTirets(chaine)
		{
			var tab = chaine.split('-'); //Compte le nombre de tiret
			return tab.length;
		}
		function verificationTiretApostrophe(chaine)
		{
			var modele= new RegExp("-'|'-");
			if (modele.test(chaine)) return true;
			else return false;
		}
		function apostropheCorrect(chaine){
			var modele= new RegExp("\\'{2,}|^\\'");
			if(modele.test(chaine)) return false;
			else return true;
		}
		function nomCorrect(ch)
		{
			if(formatNomCorrect(ch)&&tiretCorrectNom(ch)&&espaceCorrect(ch)&&apostropheCorrect(ch))
				return true;//"nom correct";
			else
				return false;// "nom incorrect ";
		}
		function prenomCorrect(ch)
		{
			if(formatPrenomCorrect(ch)&&tiretCorrectPrenom(ch)&&espaceCorrect(ch)&&apostropheCorrect(ch))return true;// "prenom correct";
			else 
				return false;//"prenom incorrect";
		}

		function villeCorrect(ch)
		{
			if(formatPrenomCorrect(ch)&&tiretCorrectVille(ch)&&espaceCorrect(ch)&&apostropheCorrect(ch))return true;// "ville correct";
			else 
				return false;//"prenom incorrect";
		}

		function formatAdresse(ch)
		{
			var tab = ch.split(' ')
			var erreur = false
			var matchNumero = new RegExp("[0-9]")
			for(var i=0; i<tab.length; i++){
				if(tab[i].length!=0){
					if(i==0 ){
						if(!(formatChaineChiffreCorrect(tab[i]) || formatNomCorrect(tab[i]))){
							erreur = true
						}
					}
					else{
						if(!formatNomCorrect(tab[i])){
							erreur = true
						}
					}
				}
			}
			return erreur
		}
		
		export function traitementNom(ch){// si traitement nom n'est pas rempli retourner false
				var nom = supprimerTiret(ch);
				nom = convertirAccent(nom);
				nom = convertirMajuscule(nom);
				nom = supprimerEspace(nom);
				if(!nomCorrect(nom) || nom.length>=30){
					return false;
				} 
				return nom;
		}
		
		export function traitementPrenom(ch){// si traitement prenom n'est pas rempli retourner false
				var prenom = ch.replace(/ /g,"");
				prenom = supprimerEspace(prenom);
				prenom = supprimerTiret(prenom);
				prenom = convertirMajusculePrenom(prenom);
				if(!prenomCorrect(prenom) || prenom.length>=30){
					return false;
				}
				return prenom;
		}

		export function traitementNumero(ch){// si traitement numero n'est pas rempli retourner false
				if(!formatChaineChiffreCorrect(ch)){
					return false;
				} 
				return ch;
		}

		export function traitementCodePostal(ch){// si traitement cdde postal n'est pas rempli retourner false
				var code = convertirMajuscule(ch);
				if(!formatCodePostalCorrect(code)){
					return false;
				} 
				return code;
		}

		export function traitementVille(ch){// si traitement cdde postal n'est pas rempli retourner false
				var ville = convertirCaractereSpecial(ch);
				ville = ville.replace(/ /g,"");
				ville = supprimerEspace(ville);
				ville = supprimerTiret(ville);
				ville = convertirMajusculePrenom(ville);
				if(!villeCorrect(ville) || ville.length>=30){
					return false;
				}
				return ville;
		}

		export function traitementAdresse(ch){// si traitement cdde postal n'est pas rempli retourner false
				var adresse = convertirCaractereSpecial(ch)
				adresse = convertirAccentDebutMot(adresse)
				adresse = convertirAccent(adresse);
				adresse = supprimerTiret(adresse);
				adresse = supprimerEspace(adresse);
				if(formatAdresse(adresse)){
					console.log("erreur")
					return false;
				} 
				adresse = convertirAdresse(adresse)
				return adresse;
		}