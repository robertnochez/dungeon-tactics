// Functions dealing with entities
import { Entity, Player, Goblin } from "../types/entities";
//import { rollDice } from "./diceutils";

export function isAdjacent(entity1: Entity, entity2: Entity): boolean {
    let distanceX = Math.abs(entity1.position.x - entity2.position.x);
    let distanceY = Math.abs(entity1.position.y - entity2.position.y);

    return (distanceX === 1 && distanceY === 0) || (distanceX === 0 && distanceY === 1);
}

export function attackEntity(attacker: Entity, enemy: Entity) {
    if (isAdjacent(attacker, enemy)) {
        
    }
}