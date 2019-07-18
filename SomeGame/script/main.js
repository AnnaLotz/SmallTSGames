var BarGame;
(function (BarGame) {
    window.addEventListener("DOMContentLoaded", init);
    let player;
    function init() {
        console.log("Hello World!");
        initialEventListener();
        player = new BarGame.Player;
        updateHTML();
    } //close init
    function updateHTML() {
        document.getElementById("healthStat").innerText = player.health.toString();
        document.getElementById("hpPacks").innerText = player.hpPacks.toString();
        document.getElementById("strengthStat").innerText = player.strenght.toString();
    } //close updateHTML
    function initialEventListener() {
        document.getElementById("nextTableButton").addEventListener("click", nextTable);
        document.getElementById("shopButton").addEventListener("click", goToBar);
    }
    function nextTable() {
        console.log("nächster Tisch");
    } //close nexTable
    function goToBar() {
        console.log("gehe an die Bar");
    } //close goToBar
})(BarGame || (BarGame = {})); //close namespace
//# sourceMappingURL=main.js.map