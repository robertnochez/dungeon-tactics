// Functions dealing with entities
import { Entity, Player, Goblin } from "../types/entities";
import { rollDice } from "./diceUtils";

export function isAdjacent(entity1: Entity, entity2: Entity): boolean {
    let distanceX = Math.abs(entity1.position.x - entity2.position.x);
    let distanceY = Math.abs(entity1.position.y - entity2.position.y);

    return (distanceX === 1 && distanceY === 0) || (distanceX === 0 && distanceY === 1);
}

export function attackEntity(attacker: Entity, enemy: Entity) {
    if (isAdjacent(attacker, enemy)) {
        // Strength modifier by using Strength ability score
        let attackerStrengthMod = Math.floor((attacker.strength - 10) / 2);

        // Used to compare with enemy.ac to determine hit or miss
        let attackRoll = rollDice(1, 20);

        // Simple form but can be improved by considering weapon and attack types
        let weaponDamage = rollDice(1, 8);

        let damageTotal = 0;

        if (!attacker.holding_item) {
            // Unarmed Strike = 1 + Strength Modifier
            damageTotal = 1 + attackerStrengthMod;
        } else {
            // Weapon strike
            damageTotal = weaponDamage + attackerStrengthMod;
        }

        // Handle case for Crit
        if (attackRoll === 20) {
            enemy.hp -= damageTotal + rollDice(1, 8);
        } else {
            if (attackRoll >= enemy.ac) {
                enemy.hp -= damageTotal;
            }
        } 
    }
}