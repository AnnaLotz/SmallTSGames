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

            if (this.strenght + _weapon.strength >= _enemy.strenght) {

                let i: number = findEnemyInArray(_enemy);
                console.log(i);
                let enemy: Enemy = enemies[i];

                this.coins += enemy.coins;
                this.foughtPeople++;
                this.strenght += 0.3 / enemy.strenght;

                enemies.splice(i, 1);
                createEnemyHTML();
            } else {
                this.health -= 10;
                console.log("Playerhealth = " + this.health);
            }
            updatePlayerHTML();
        } //close fight

    } //close class

}//namespace zu