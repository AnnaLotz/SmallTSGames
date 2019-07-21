var BarGame;
(function (BarGame) {
    class Fist extends BarGame.Weapon {
        constructor() {
            super();
            this.name = "Faust";
            this.strength = 0;
            this.durability = 1000000;
        } //close constructor
    } //close class
    BarGame.Fist = Fist;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=fist.js.map