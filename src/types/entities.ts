export interface Entity {
    id: number;
    type: 'character' | 'enemy';
    position: {x: number; y: number;};
    speed: number;
    hp: number;
}