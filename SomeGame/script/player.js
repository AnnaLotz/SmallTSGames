var BarGame;
(function (BarGame) {
    class Player extends BarGame.Person {
        constructor() {
            super();
            this.health = 100;
            this.hpPacks = 0;
            this.coins = 20;
            this.strenght = 1;
        }
    }
    BarGame.Player = Player;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=player.js.map