namespace BarGame {

    export class Player extends Person {

        hpPacks: number;
        foughtPeople: number; //erhöht die chance einen Freund zu finden

        constructor() {
            super();
            this.health = 100;
            this.hpPacks = 0;
            this.coins = 20;
            this.strenght = 1;
            this.weapons = [];
        }

        getWeapon(): void {
            let fist: Fist = new Fist;
            this.weapons.push(fist);

            let cigarette: Cigarette = new Cigarette;
            this.weapons.push(cigarette);

            let bottle: Bottle = new Bottle;
            this.weapons.push(bottle);

            console.log(this.weapons);
        }

        fight(_enemy: Enemy, _weapon: Weapon): void {
            console.log("fight");
            console.log(_enemy, _weapon);

            let i: number = findObjectInArray(_enemy, enemies);
            let enemy: Enemy = enemies[i];

            if (this.strenght + _weapon.strength >= enemy.strenght) {
                enemy.isDefeated();
                createEnemyHTML();
            } else {
                this.health -= enemy.strenght * 2 ;

                enemy.health -= this.strenght + _weapon.strength;
                enemy.health = Math.floor(enemy.health);
                console.log(enemy.health);

            }
            this.strenght += 0.3 / enemy.strenght;
            this.strenght.toFixed(2); //auf 2 Kommastellen bringen
            _weapon.durability--;
            _weapon.checkDurability();
            enemy.checkHealth();
            updatePlayerHTML();
            createEnemyHTML();
        } //close fight

    } //close class

}//namespace zu