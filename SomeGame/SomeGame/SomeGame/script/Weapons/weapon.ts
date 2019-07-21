namespace BarGame {

    export class Weapon extends Object { //Superklasse

        strength: number;
        durability: number;

        constructor() {
            super();
        } //close constructor

        checkDurability(): void {
            console.log("use weapon");
            if (this.durability <= 0) {
                
                let index: number = findObjectInArray(this, player.weapons);
                console.log("delete weapon " + index);
                player.weapons.splice(index, 1);
            }

        }//close checkDurability

    }//close class

}//namespace zu