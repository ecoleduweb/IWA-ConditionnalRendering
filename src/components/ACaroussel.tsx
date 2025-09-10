import '@style/Caroussel.scss'

import charactersJson from '@assets/characters.json';
import { CharacterClass } from '../types/character';
import { useState } from 'react';
const characterObjectsList: CharacterClass[] = charactersJson;
const characterStringList = ['guerrier', 'cleric', 'voleur', 'mage'];

const ACaroussel = () => {
  // const selectedCharacter = 'mage'
  
  const style = {
    // exemple de style
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    //backgroundImage: `url(/${selectedCharacter}.jpg)`,
  }
  return (
    <div className="card flex-between" style={style}>
      <div className="content">
        {/* REMPLACE MOI PAR LA CLASSE SELECTIONNÉE!!! */}
        {/* <h2>{selectedCharacter} </h2> */}
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
