import { calculateHealth } from '../calc-health.js';

test.each([
    ['маг', 14, 'critical'],
    ['мечник', 15, 'wounded'],
    ['лучник', 60, 'healthy'],
    ['маг', 0, 'killed']
])('testing healf status function %n name and %h health', (name, health, expected) => {
    let gamer = {
        name: name,
        health: health
    };
    const result = calculateHealth(gamer);
    expect(result).toBe(expected);
});