import Game from "./game/game.js";

const game = new Game(document.getElementById("gameCanvas"));
game.init();
game.start();