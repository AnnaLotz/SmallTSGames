namespace BarGame {
    window.addEventListener("DOMContentLoaded", init);

    let player: Player;
    let enemies: Enemy[];
    let barDiv: HTMLElement;

    function init(): void {
        console.log("Hello World!");
        barDiv = document.getElementById("barDiv");
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
        player = new Player;

        updateHTML();
    } //close init


    function updateHTML(): void {
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
    } //close updateHTML


    function nextTable(): void {
        barDiv.innerHTML = "";
        enemies = [];
        console.log("nächster Tisch");

        let r: number = Math.floor(Math.random() * 3 + 1);
        for (let i: number = 0; i < r; i++) {
            let enemy: Junkie = new Junkie;
            enemies.push(enemy);
            createEnemyHTML(enemy);
        }

    } //close nexTable


    function createEnemyHTML(_enemy: Enemy): void {
        console.log(_enemy);
        let enemyDiv: HTMLDivElement = document.createElement("div");
        enemyDiv.id = "enemyDiv";
        enemyDiv.innerHTML = _enemy.name + "<p>Stärke: " + _enemy.strenght + "</p>";
        let fightButton: HTMLButtonElement = document.createElement("button");
        fightButton.innerText = "Kämpfen!";

        enemyDiv.appendChild(fightButton);
        barDiv.appendChild(enemyDiv);

        fightButton.addEventListener("click", fight);
    } //close createEnemy


    function goToBar(): void {
        console.log("gehe an die Bar");
    } //close goToBar


    function fight(): void {
        console.log("fight");
    } //close fight

} //close namespace