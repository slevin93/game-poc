import Engine from "../engine/core/engine.js";

import Player from "./game-objects/player.js";

export default class Game {

    constructor(canvas) {
        this.engine = new Engine(canvas);
    }

    init() {
        this.engine.addEntity(new Player());
    }

    start() {
        this.engine.start();
    }
}