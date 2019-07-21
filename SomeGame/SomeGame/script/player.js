var BarGame;
(function (BarGame) {
    class Player extends BarGame.Person {
        constructor() {
            super();
            this.health = 100;
            this.hpPacks = 0;
            this.coins = 20;
            this.strenght = 1;
            this.weapons = [];
        }
        getWeapon() {
            let fist = new BarGame.Fist;
            this.weapons.push(fist);
            let cigarette = new BarGame.Cigarette;
            this.weapons.push(cigarette);
            let bottle = new BarGame.Bottle;
            this.weapons.push(bottle);
            console.log(this.weapons);
        }
        fight(_enemy, _weapon) {
            console.log("fight");
            console.log(_enemy, _weapon);
            if (this.strenght + _weapon.strength >= _enemy.strenght) {
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