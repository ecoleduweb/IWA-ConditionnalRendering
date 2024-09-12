import '@style/Card.scss'

import charactersJson from '@assets/characters.json';
import { CharacterClass } from '../types/character';
const characters: CharacterClass[] = charactersJson;

const ACard = () =>{
  //1 . Aller chercher le bon personnage, ici on veut le page.
  const characterSelected = 'mage'
  const character = characters.find(x => x.class.toLocaleLowerCase() === characterSelected) as CharacterClass
  console.log("🚀 ~ ACard ~ character:", character)
  console.log("🚀 ~ ACard ~ mageInfos:", characters)
  const style = {
    backgroundImage: `url(/${characterSelected}.jpg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  return (
    <div className='card' style={style}>
      <div className='content'>
      {character ? 
        <>
          <h2>{character.class}</h2>
          <p>Description: {character.description}</p>
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
        </>
        :
        <p>Le charactère n'existe pas</p>
      }
      </div>
    </div>
  )
}


export default ACard
