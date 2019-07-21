var BarGame;
(function (BarGame) {
    class Enemy extends BarGame.Person {
        constructor() {
            super();
        }
        checkHealth() {
            if (this.health <= 0) {
                this.isDefeated();
            }
        } // close checkHealth
        isDefeated() {
            let index = BarGame.findObjectInArray(this, BarGame.enemies);
            BarGame.enemies.splice(index, 1);
            BarGame.player.foughtPeople++;
            BarGame.player.coins += this.coins;
        }
    } //close class Enemy
    BarGame.Enemy = Enemy;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=enemy.js.map