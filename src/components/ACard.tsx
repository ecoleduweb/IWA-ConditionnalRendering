import '@style/Card.scss'

import charactersJson from '@assets/characters.json';
import { CharacterClass } from '../types/character';
import { useState } from 'react';
const characters: CharacterClass[] = charactersJson;
const characterList = ['mage', 'guerrier', 'cleric', 'voleur']

const ACard = () => {
  // Lien vers le résumé de la documentation https://react.dev/learn/conditional-rendering#recap

  //1 . Aller chercher le bon personnage, ici on veut le page.
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const characterSelected = characterList[selectedIndex]
  const character = characters.find(x => x.class.toLocaleLowerCase() === characterSelected) as CharacterClass
  const style = {
    backgroundImage: `url(/${characterSelected}.jpg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  const handlePreviousClick = () => {
    setSelectedIndex(selectedIndex - 1 < 0 ? characterList.length - 1 : selectedIndex - 1)
  }

  const handleNextClick = () => {
    setSelectedIndex(selectedIndex + 1 > characterList.length - 1 ? 0 : selectedIndex + 1)
  }

  const handleShowDetailsClick = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className='card flex-between' style={style}>
      <div className='content'>
        {character ?
          <>
            <h2>{character.class} {showDetails}</h2>

            <p>Description: {character.description}</p>
            {showDetails && <div className="details">
              <div className='stats'>
                <h2>Statistiques</h2>
                <p>Health: {character.stats.health}</p>
                <p>Mana: {character.stats.mana}</p>
                <p>Strength: {character.stats.strength}</p>
                <p>Intelligence: {character.stats.intelligence}</p>
                <p>Dexterity: {character.stats.dexterity}</p>
                <p>Wisdom: {character.stats.wisdom}</p>
              </div>
              <div className='ability'>
                <h2>Talents</h2>
                <ul>
                  {character.abilities.map(x =>
                    <li>
                      {x}
                    </li>
                  )}
                </ul>
              </div>
              <div className='equipment'>
                <h2>Équipement</h2>
                <ul>
                  {Object.keys(character.equipment).map((x) =>
                    <li>
                      {x} : {character.equipment[x as keyof typeof character.equipment]}
                    </li>
                  )}
                </ul>
              </div>
            </div>}
          </>
          :
          <p>Le charactère n'existe pas</p>
        }
      </div>
      <div className='flex-between'>
        <button onClick={handlePreviousClick}>PREVIOUS</button>
        <button onClick={handleShowDetailsClick}>{showDetails ? 'Cacher ' : 'Montrer '}les détails</button>
        <button onClick={handleNextClick}>NEXT</button>
      </div>
    </div>
  )
}


export default ACard
