namespace BarGame {
    window.addEventListener("DOMContentLoaded", init);

    export let player: Player;
    export let enemies: Enemy[];
    let barDiv: HTMLElement;

    function init(): void {
        barDiv = document.getElementById("barDiv");
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
        player = new Player;

        player.getWeapon();
        updatePlayerHTML();
    } //close init


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


    export function updatePlayerHTML(): void {
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
        document.getElementById("coinsStat").innerText = player.coins.toString();

        document.getElementById("weaponsDiv").innerHTML = "";
        for (let i: number = 0; i < player.weapons.length; i++) {
            let weapon: Weapon = player.weapons[i];
            let weaponDiv: HTMLDivElement = document.createElement("div");
            weaponDiv.innerHTML += "<p>" + weapon.name + ":</p><p>+ " + weapon.strength + " Stärke, Haltbarkeit: " + weapon.durability + "</p>" ;
            document.getElementById("weaponsDiv").appendChild(weaponDiv);
        }
    } //close updatePlayerHTML

    export function createEnemyHTML(): void {
        barDiv.innerHTML = "";
        for (let i: number = 0; i < enemies.length; i++) {
            let enemy: Enemy = enemies[i];
            let enemyDiv: HTMLDivElement = document.createElement("div");
            enemyDiv.className = "enemyDiv";
            enemyDiv.innerHTML = enemy.name + "<p>Stärke: " + enemy.strenght + "</p><p>Gesundheit: " + enemy.health + "</p>";
            enemyDiv.innerHTML += "<p>Kämpfe mit: ";

            let fightButton: HTMLButtonElement;
            for (let i: number = 0; i < player.weapons.length; i++) {
                fightButton = document.createElement("button");
                fightButton.innerText = player.weapons[i].name;

                enemyDiv.appendChild(fightButton);
                fightButton.addEventListener(
                    "click",
                    function (): void {
                        player.fight(enemy, player.weapons[i]);
                    }
                );
            }
            barDiv.appendChild(enemyDiv);
        }
    } //close createEnemyHtml


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

    export function findObjectInArray(_object: Object, _array: Object[]): number {
        console.log(_object, _array);
        let foundIndex: number;
        for (let i: number = 0; i < _array.length; i++) {
            if (_array[i] == _object) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }

} //close namespace