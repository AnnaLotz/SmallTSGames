var BarGame;
(function (BarGame) {
    window.addEventListener("DOMContentLoaded", init);
    let player;
    let enemies;
    let barDiv;
    function init() {
        console.log("Hello World!");
        barDiv = document.getElementById("barDiv");
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
        player = new BarGame.Player;
        updateHTML();
    } //close init
    function updateHTML() {
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
    } //close updateHTML
    function nextTable() {
        barDiv.innerHTML = "";
        enemies = [];
        console.log("nächster Tisch");
        let r = Math.floor(Math.random() * 3 + 1);
        for (let i = 0; i < r; i++) {
            let enemy = new BarGame.Junkie;
            enemies.push(enemy);
            createEnemyHTML(enemy);
        }
    } //close nexTable
    function createEnemyHTML(_enemy) {
        console.log(_enemy);
        let enemyDiv = document.createElement("div");
        enemyDiv.id = "enemyDiv";
        enemyDiv.innerHTML = _enemy.name + "<p>Stärke: " + _enemy.strenght + "</p>";
        let fightButton = document.createElement("button");
        fightButton.innerText = "Kämpfen!";
        enemyDiv.appendChild(fightButton);
        barDiv.appendChild(enemyDiv);
        fightButton.addEventListener("click", fight);
    } //close createEnemy
    function goToBar() {
        console.log("gehe an die Bar");
    } //close goToBar
    function fight() {
        console.log("fight");
    } //close fight
})(BarGame || (BarGame = {})); //close namespace
//# sourceMappingURL=main.js.map