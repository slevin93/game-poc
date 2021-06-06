import Engine from "../engine/core/engine.js";
import EntityManager from "../engine/core/entity-manager.js";

import Player from "./game-objects/player.js";
import Crate from "./game-objects/crate.js";

export default class Game {

    constructor(canvas) {
        this.engine = new Engine(canvas);
    }

    init() {
        EntityManager.addEntity(new Player());
        EntityManager.addEntity(new Crate());
    }

    start() {
        this.engine.start();
    }
}