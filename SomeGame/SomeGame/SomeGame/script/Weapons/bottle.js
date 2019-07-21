var BarGame;
(function (BarGame) {
    class Bottle extends BarGame.Weapon {
        constructor() {
            super();
            this.name = "Flasche";
            this.strength = 3;
            this.durability = 2;
        } //close constructor
    } //close class
    BarGame.Bottle = Bottle;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=bottle.js.map