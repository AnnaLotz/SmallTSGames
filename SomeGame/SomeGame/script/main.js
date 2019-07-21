var BarGame;
(function (BarGame) {
    window.addEventListener("DOMContentLoaded", init);
    let player;
    let barDiv;
    function init() {
        barDiv = document.getElementById("barDiv");
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
        player = new BarGame.Player;
        updatePlayerHTML();
        player.getWeapon();
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
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
        document.getElementById("coinsStat").innerText = player.coins.toString();
    } //close updatePlayerHTML
    BarGame.updatePlayerHTML = updatePlayerHTML;
    function createEnemyHTML() {
        barDiv.innerHTML = "";
        for (let i = 0; i < BarGame.enemies.length; i++) {
            let enemy = BarGame.enemies[i];
            let enemyDiv = document.createElement("div");
            enemyDiv.id = "enemyDiv";
            enemyDiv.innerHTML = enemy.name + "<p>Stärke: " + enemy.strenght + "</p>";
            enemyDiv.innerHTML += "<p>Kämpfe mit: ";
            let fightButton;
            for (let i = 0; i < player.weapons.length; i++) {
                fightButton = document.createElement("button");
                fightButton.innerText = player.weapons[i].name;
                enemyDiv.appendChild(fightButton);
                fightButton.addEventListener("click", function () {
                    player.fight(enemy, player.weapons[i]);
                });
            }
            barDiv.appendChild(enemyDiv);
        }
    } //close createEnemyHtml
    BarGame.createEnemyHTML = createEnemyHTML;
    function findEnemyInArray(_enemy) {
        let foundEnemyIndex;
        for (let i = 0; i < BarGame.enemies.length; i++) {
            if (BarGame.enemies[i] == _enemy) {
                foundEnemyIndex = i;
                break;
            }
        }
        return foundEnemyIndex;
    } //close findEnemyInArray
    BarGame.findEnemyInArray = findEnemyInArray;
})(BarGame || (BarGame = {})); //close namespace
//# sourceMappingURL=main.js.map