import React, { useState } from 'react';
import Box from './box';
const index = () => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);

    return (
        <section className="hero is-blue is-large" id="conseils">
        <div className="hero-body">
            <div className="container">
                <h1 className="title is-size-1 has-text-light"> 
                    Nos conseils
                </h1>
                <Box 
                    boxHook={box1} 
                    setBox={setBox1} 
                    title="Pourquoi faire un CV ?" 
                    textBox1="Votre CV (Curriculum Vitae) vous permettra de démontrer que vous êtes la personne idéale
                    pour le poste. Pour ce faire, votre CV prendra la forme d’un résumé de vos atouts personnels,
                    professionnel et sociaux. Ces atouts peuvent prendre la forme de diplômes ou d’expérience
                    professionnel et personnel."
                    subtitleBox1="Démontrez que vous êtes la personne idéale !"
                />
                <Box 
                    boxHook={box2} 
                    setBox={setBox2} 
                    title="Comment identifier ses compétences ?" 
                    textBox1="Pour identifier vos compétences, vous pouvez commencer par dresser une liste de vos qualifications, vos formations suivies ainsi que de vos diplômes obtenus. Notez ensuite vos compétences « techniques » qui peuvent être définies et mesurées telles que plusieurs années d’expériences en conception web ou la réalisation d’un service civique."
                    subtitleBox1="Listez vos compétences !"
                    textBox2="Viennent ensuite vos apports autres que vos expériences professionnelles. Notez vos aptitudes au leadership, au travail en équipe ou à la communication. Ces compétences indiquent votre capacité à travailler en équipe, capacité qui est de plus en plus demander dans de nombreux domaines."
                    subtitleBox2="Quelles sont vos aptitudes ?"
                    textBox3="Vous aimeriez rajouter du contenu ? Pensez aux difficultés rencontrées par le passé et aux aptitudes qui vous ont le plus aidé dans ces situations."
                    subtitleBox3="Notez vos experiences personnelles !"
                />
                <Box 
                    boxHook={box3} 
                    setBox={setBox3} 
                    title="Quelles sont les étapes de la rédaction d'un CV efficace ?" 
                    textBox1="Après avoir listé vos compétences. Vous allez maintenant rédiger votre CV. Pour cela, vous pouvez utiliser différentes applications comme Microsoft Word, Adobe InDesign ou encore InkScape. Cependant, si ces outils permettent une personnalisation poussée, ils peuvent être complexe à utiliser. C'est pourquoi nous vous conseillons CvCreator pour réaliser votre CV."
                    subtitleBox1="Choisir le bon outil"
                    textBox2="Commencez par le plus important. Inserer votre nom, vos coordonnées, indiquez votre adresse, votre numéro de téléphone, votre adresse mail ainsi que votre adresse postale. Sur un CV, il est d'usage de mettre une photo, elle est souvent mieux retenue par le recruteur. Cependant, ce n'est pas obligatoire, en effet, la photo peut être une source de discrimination, bien que la discrimination sur l’apparence physique est illégale et sanctionnée."
                    subtitleBox2="Si vous ne mettez pas de photo, ce doit être un choix"
                    textBox3="La première partie de votre CV peut être un résumé de votre principale compétence. Ce seront les premières lignes que votre recruteur lira et si elles ne sont pas convaincantes, ce seront les seuls qu’il aura lu de votre CV."
                    subtitleBox3="Un CV accrocheur aura plus de chance d'être lu"
                    textBox4="La forme de votre CV est aussi importante que sont contenue. Avant toute chose ne faites pas de faute. Relisez-vous en utilisant un correcteur d’orthographe (Scribben, reverso, SpellBoy) et faites-vous relire par d’autres. Faites attention à ne pas trop utiliser de gras où il perdra son utilité. Évitez aussi de trop répéter « je ». N’utilisez pas de termes compliqués. Le CV s’adresse à un recruteur qui n’est pas expert dans votre domaine."
                    subtitleBox4="Utilisez un correcteur d’orthographe"
                    textBox5="Pour conclure, il y a deux choses à ne pas oublier lors de la rédaction de votre CV. Premièrement, il ne faut pas oublier que le recruteur reçoit des dizaines de CV par offre d’emploi. Il faut donc rester pertinent et se démarquer, notamment en adaptant le CV à l'offre d'emploi ou de stage. Ensuite, Chris Anderson dans son livre sur les conférences TED, nous donne l’avertissement suivant : « Toute tentative d’appliquer une formule toute faite a de grande chance de vous exploser à la figure. Le public s’en apercevra et en un instant se sentira manipuler. » Cela s’applique aussi pour la création de documents comme un CV."
                    subtitleBox5="« Toute tentative d’appliquer une formule toute faite a de grande chance de vous exploser à la figure. Le public s’en apercevra et en un instant se sentira manipuler. »"
                />
            </div>
        </div>
    </section>
    );
};

export default index;