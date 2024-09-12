import '@style/Caroussel.scss'

import charactersJson from '@assets/characters.json';
import { CharacterClass } from '../types/character';
import { useState } from 'react';
const characters: CharacterClass[] = charactersJson;
const characterList = ['mage', 'guerrier', 'cleric', 'voleur']
// 1. Fait fonctionner les boutons previous et next pour afficher chacun des personnage qu'on peut utiliser.

const ACard = () => {
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


export default ACard
