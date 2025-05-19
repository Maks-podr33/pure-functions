export function calculateHealth(gamer) {
    if (gamer.health > 50) {
        return 'healthy';
    } else if (gamer.health >= 15) {
        return 'wounded';
    } else if (gamer.health > 0) {
        return 'critical';
    } else {
        return 'killed';
    }
};