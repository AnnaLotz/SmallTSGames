var BarGame;
(function (BarGame) {
    window.addEventListener("DOMContentLoaded", init);
    let barDiv;
    function init() {
        barDiv = document.getElementById("barDiv");
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
        BarGame.player = new BarGame.Player;
        BarGame.player.getWeapon();
        updatePlayerHTML();
    } //close init
    function goToBar() {
        console.log("gehe an die Bar");
    } //close goToBar
    function nextTable() {
        console.log("nächster Tisch");
        BarGame.enemies = [];
        let r = Math.floor(Math.random() * 3 + 1);
        for (let i = 0; i < r; i++) {
            let enemy = new BarGame.Junkie;
            BarGame.enemies.push(enemy);
        }
        createEnemyHTML();
    } //close nexTable
    function updatePlayerHTML() {
        document.getElementById("healthStat").innerText = BarGame.player.health.toString();
        document.getElementById("hpPacks").innerText = BarGame.player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = BarGame.player.strenght.toString();
        document.getElementById("coinsStat").innerText = BarGame.player.coins.toString();
        document.getElementById("weaponsDiv").innerHTML = "";
        for (let i = 0; i < BarGame.player.weapons.length; i++) {
            let weapon = BarGame.player.weapons[i];
            let weaponDiv = document.createElement("div");
            weaponDiv.innerHTML += "<p>" + weapon.name + ":</p><p>+ " + weapon.strength + " Stärke, Haltbarkeit: " + weapon.durability + "</p>";
            document.getElementById("weaponsDiv").appendChild(weaponDiv);
        }
    } //close updatePlayerHTML
    BarGame.updatePlayerHTML = updatePlayerHTML;
    function createEnemyHTML() {
        barDiv.innerHTML = "";
        for (let i = 0; i < BarGame.enemies.length; i++) {
            let enemy = BarGame.enemies[i];
            let enemyDiv = document.createElement("div");
            enemyDiv.className = "enemyDiv";
            enemyDiv.innerHTML = enemy.name + "<p>Stärke: " + enemy.strenght + "</p><p>Gesundheit: " + enemy.health + "</p>";
            enemyDiv.innerHTML += "<p>Kämpfe mit: ";
            let fightButton;
            for (let i = 0; i < BarGame.player.weapons.length; i++) {
                fightButton = document.createElement("button");
                fightButton.innerText = BarGame.player.weapons[i].name;
                enemyDiv.appendChild(fightButton);
                fightButton.addEventListener("click", function () {
                    BarGame.player.fight(enemy, BarGame.player.weapons[i]);
                });
            }
            barDiv.appendChild(enemyDiv);
        }
    } //close createEnemyHtml
    BarGame.createEnemyHTML = createEnemyHTML;
    /*
    export function findEnemyInArray(_enemy: Enemy): number {
        let foundEnemyIndex: number;
        for (let i: number = 0; i < enemies.length; i++) {
            if (enemies[i] == _enemy) {
                foundEnemyIndex = i;
                break;
            }
        }
        return foundEnemyIndex;
    } //close findEnemyInArray
    */
    function findObjectInArray(_object, _array) {
        console.log(_object, _array);
        let foundIndex;
        for (let i = 0; i < _array.length; i++) {
            if (_array[i] == _object) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }
    BarGame.findObjectInArray = findObjectInArray;
})(BarGame || (BarGame = {})); //close namespace
//# sourceMappingURL=main.js.map