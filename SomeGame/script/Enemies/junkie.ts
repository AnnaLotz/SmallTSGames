namespace BarGame {

    export class Junkie extends Enemy {

        constructor() {
            super();
            this.name = "Junkie";
            this.health = Math.floor(Math.random() * 10 + 10); //zwischen 10 und 20
            this.strenght = Math.floor(Math.random() * 4 + 1);
            this.coins = Math.floor(Math.random() * 8);
        }

    } //close class Enemy

}//namespace zu