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
    <div className="card flex-between" style={style}>
      <div className="content">
        <h2>Mage </h2>
        <p>Description: Un maître des arcanes capable de lancer de puissants sorts</p>
        <div className="details">
          <div className="stats">
            <h2>Statistiques</h2>
            <p>Health: 60</p>
            <p>Mana: 120</p>
            <p>Strength: 5</p>
            <p>Intelligence: 18</p>
            <p>Dexterity: 8</p>
            <p>Wisdom: 15</p>
          </div>
          <div className="ability">
            <h2>Talents</h2>
            <ul>
              <li>Boule de feu</li>
              <li>Bouclier magique</li>
              <li>Téléportation</li>
              <li>Projectile magique</li>
            </ul>
          </div>
          <div className="equipment">
            <h2>Équipement</h2>
            <ul>
              <li>weapon : Bâton magique</li>
              <li>armor : Robe d'apprenti</li>
              <li>accessory : Anneau de concentration</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-between">
        <button>Précédent</button>
        <button>Cacher les détails{/* Afficher les détails */}</button>
        <button>Suivant</button>
      </div>
    </div>
  )
}


export default ACaroussel
