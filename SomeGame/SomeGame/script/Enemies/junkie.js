var BarGame;
(function (BarGame) {
    class Junkie extends BarGame.Enemy {
        constructor() {
            super();
            this.name = "Junkie";
            this.health = Math.floor(Math.random() * 10 + 10); //zwischen 10 und 20
            this.strenght = Math.floor(Math.random() * 4 + 2);
            this.coins = Math.floor(Math.random() * 8);
        }
    } //close class Enemy
    BarGame.Junkie = Junkie;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=junkie.js.map