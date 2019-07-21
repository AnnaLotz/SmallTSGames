var BarGame;
(function (BarGame) {
    class Player extends BarGame.Person {
        constructor() {
            super();
            this.health = 100;
            this.hpPacks = 0;
            this.coins = 20;
            this.strenght = 1;
        }
        fight(_enemy) {
            console.log("fight");
            console.log(_enemy);
            if (this.strenght >= _enemy.strenght) {
                let i = BarGame.findEnemyInArray(_enemy);
                console.log(i);
                let enemy = BarGame.enemies[i];
                this.coins += enemy.coins;
                this.foughtPeople++;
                this.strenght += 0.3 / enemy.strenght;
                BarGame.enemies.splice(i, 1);
                BarGame.createEnemyHTML();
            }
            else {
                this.health -= 10;
                console.log("Playerhealth = " + this.health);
            }
            BarGame.updatePlayerHTML();
        } //close fight
    } //close class
    BarGame.Player = Player;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=player.js.map