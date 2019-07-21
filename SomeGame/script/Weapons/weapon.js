var BarGame;
(function (BarGame) {
    class Weapon extends BarGame.Object {
        constructor() {
            super();
        } //close constructor
        checkDurability() {
            console.log("use weapon");
            if (this.durability <= 0) {
                let index = BarGame.findObjectInArray(this, BarGame.player.weapons);
                console.log("delete weapon " + index);
                BarGame.player.weapons.splice(index, 1);
            }
        } //close checkDurability
    } //close class
    BarGame.Weapon = Weapon;
})(BarGame || (BarGame = {})); //namespace zu
//# sourceMappingURL=weapon.js.map