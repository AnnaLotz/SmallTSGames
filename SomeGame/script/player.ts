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
        }

        fight(_enemy: Enemy): void {
            console.log("fight");
            console.log(_enemy);

            if (this.strenght >= _enemy.strenght) {

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