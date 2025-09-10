interface CharacterStats {
    health: number;
    mana: number;
    strength: number;
    intelligence: number;
    dexterity: number;
    wisdom: number;
  }
  
  interface CharacterEquipment {
    weapon: string;
    armor: string;
    accessory: string;
  }
  
  interface CharacterClass {
    class: string;
    description: string;
    stats: CharacterStats;
    abilities: string[];
    equipment: CharacterEquipment | undefined;
  }

  // ACM crée les interfaces en te basant sur les valeurs.
  export type {CharacterClass, CharacterEquipment, CharacterStats}