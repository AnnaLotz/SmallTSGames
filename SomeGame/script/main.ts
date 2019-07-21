namespace BarGame {
    window.addEventListener("DOMContentLoaded", init);

    let player: Player;
    export let enemies: Enemy[];
    let barDiv: HTMLElement;

    function init(): void {
        barDiv = document.getElementById("barDiv");
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
        player = new Player;

        updatePlayerHTML();
    } //close init


    export function updatePlayerHTML(): void {
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
        document.getElementById("coinsStat").innerText = player.coins.toString();
    } //close updatePlayerHTML

    export function createEnemyHTML(): void {
        barDiv.innerHTML = "";
        for (let i: number = 0; i < enemies.length; i++) {
            let enemy: Enemy = enemies[i];
            console.log(enemy);
            let enemyDiv: HTMLDivElement = document.createElement("div");
            enemyDiv.id = "enemyDiv";
            enemyDiv.innerHTML = enemy.name + "<p>Stärke: " + enemy.strenght + "</p>";
            let fightButton: HTMLButtonElement = document.createElement("button");
            fightButton.innerText = "Kämpfen!";

            enemyDiv.appendChild(fightButton);
            barDiv.appendChild(enemyDiv);

            fightButton.addEventListener(
                "click",
                function (): void {
                    player.fight(enemy);
                }
            );
        }
    } //close createEnemyHtml


    function goToBar(): void {
        console.log("gehe an die Bar");
    } //close goToBar


    function nextTable(): void {
        console.log("nächster Tisch");
        enemies = [];

        let r: number = Math.floor(Math.random() * 3 + 1);
        for (let i: number = 0; i < r; i++) {
            let enemy: Junkie = new Junkie;
            enemies.push(enemy);
        }
        createEnemyHTML();
    } //close nexTable



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

} //close namespace