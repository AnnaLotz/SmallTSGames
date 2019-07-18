namespace BarGame {
    window.addEventListener("DOMContentLoaded", init);

    let player: Player;

    function init(): void {
        console.log("Hello World!");
        initialEventListener();
        player = new Player;

        updateHTML();
    } //close init


    function updateHTML(): void {
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
    } //close updateHTML

    function initialEventListener(): void {
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
    }

    function nextTable(): void {
        console.log("nächster Tisch");
    } //close nexTable

    function goToBar(): void {
        console.log("gehe an die Bar");
    } //close goToBar

} //close namespace