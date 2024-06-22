// Functions used to simulate dice rolls
export function rollDice (quantity: number, sides: number): number {
    let sum = 0;
    for (let i = 0; i < quantity; i++) {
        sum += Math.ceil(Math.random() * sides);
    }
    return sum;
}