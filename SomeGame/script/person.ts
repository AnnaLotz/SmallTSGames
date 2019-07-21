namespace BarGame {

    export class Person extends Object { //Superklasse

        health: number;
        weapons: Weapon[]; //:Weapon;
        strenght: number;
        coins: number; //Münzen

        constructor() {
            super();
        }
    }

}//namespace zu