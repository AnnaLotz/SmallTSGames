namespace BarGame {

    export class Enemy extends Person {

        constructor() {
            super();
        }

        checkHealth(): void {
            if (this.health <= 0) {
                this.isDefeated();
            }
        }// close checkHealth

        isDefeated(): void {
            let index: number = findObjectInArray(this, enemies);
            enemies.splice(index, 1);
            player.foughtPeople++;
            player.coins += this.coins;
        }
    } //close class Enemy

}//namespace zu