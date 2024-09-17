import '@style/Caroussel.scss'

import charactersJson from '@assets/characters.json';
import { CharacterClass } from '../types/character';
import { useState } from 'react';
const characters: CharacterClass[] = charactersJson;
const characterList = ['mage', 'guerrier', 'cleric', 'voleur']
// 1. Prend le temps de bien lire le code. S'il y a une ligne que tu ne comprends pas, CHAT GPT!
// 2. À patrir de l'objet character, va chercher l'objet mage.
//    Va lire les deux premières lignes de code sur ce site : https://sentry.io/answers/find-object-by-property-in-javascript-array/
// 3. Crée une variable style qui contient un objet avec une propriété backgroundImage qui contient l'url de l'image du mage (/mage.jpg).
//    La variable style est déjà affectée au tout premier div du html. On peut donc ajouter des éléments de style à partir du code au besoin!
// QUESTION : Quand dois-tu prendre une classe conditionnelle ou un style conditionnel (exemple de classe conditionnel? L'exemple avec le dark mode)?
// 4. À partir de l'objet, modifie le html pour afficher les différentes informations du mage.
// 5. Fait fonctionner le bouton cacher les détails pour afficher ou cacher les détails du mage.
//    Voici un lien pour t'aider à comprendre le conditionnal rendering https://react.dev/learn/conditional-rendering
//    N'oublie pas de changer le texte du bouton!
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Deuxième partie//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// 1. Fait fonctionner les boutons previous et next pour afficher les informations des autres personnages.
// 2. ohoh! Il semble que les objets n'ont pas tous le même nombre d'abilités? Comment pourrais-tu faire pour afficher les abilités de manière dynamique?
// 3. BONUS on pourrait faire la même chose avec l'objet équipement?

const ACaroussel = () => {
  const style = {
    // exemple de style
    backgroundColor: `grey`,
  }
  return (
    <div className="caroussel flex-between">
      <div className="content">
        <h2>Trouve ta classe!</h2>
        <p>Ton code ici</p>
      </div>
      <div className="flex-between">
        <button>&lt;---</button>
        <button>---&gt;</button>
      </div>
    </div>
  )
}


export default ACaroussel
