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
            let i = BarGame.findObjectInArray(_enemy, BarGame.enemies);
            let enemy = BarGame.enemies[i];
            if (this.strenght + _weapon.strength >= enemy.strenght) {
                enemy.isDefeated();
                BarGame.createEnemyHTML();
            }
            else {
                this.health -= enemy.strenght * 2;
                enemy.health -= this.strenght + _weapon.strength;
                enemy.health = Math.floor(enemy.health);
                console.log(enemy.health);
            }
            this.strenght += 0.3 / enemy.strenght;
            this.strenght.toFixed(2); //auf 2 Kommastellen bringen
            _weapon.durability--;
            _weapon.checkDurability();
            enemy.checkHealth();
            BarGame.updatePlayerHTML();
            BarGame.createEnemyHTML();
        } //close fight
    } //close class
    BarGame.Player = Player;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=player.js.map