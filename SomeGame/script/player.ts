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

    }

}//namespace zu