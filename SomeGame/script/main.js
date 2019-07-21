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
    } //close init
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
            console.log(enemy);
            let enemyDiv = document.createElement("div");
            enemyDiv.id = "enemyDiv";
            enemyDiv.innerHTML = enemy.name + "<p>Stärke: " + enemy.strenght + "</p>";
            let fightButton = document.createElement("button");
            fightButton.innerText = "Kämpfen!";
            enemyDiv.appendChild(fightButton);
            barDiv.appendChild(enemyDiv);
            fightButton.addEventListener("click", function () {
                player.fight(enemy);
            });
        }
    } //close createEnemyHtml
    BarGame.createEnemyHTML = createEnemyHTML;
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