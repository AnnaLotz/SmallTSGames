var BarGame;
(function (BarGame) {
    class Cigarette extends BarGame.Weapon {
        constructor() {
            super();
            this.name = "Zigarette";
            this.strength = 1;
        } //close constructor
    } //close class
    BarGame.Cigarette = Cigarette;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=cigarette.js.map