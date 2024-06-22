// Entity will be the base interface for both player and enemies
export interface Entity {
    id: number;
    hp: number;
    ac: number;
    speed: number;

    // Ability scores
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    position: {x: number; y:number};
    holding_item: boolean;
}

export interface Player extends Entity {
    id: 1;
    race: string;
    class: string;
    background: string;
}

export interface Goblin extends Entity {

}