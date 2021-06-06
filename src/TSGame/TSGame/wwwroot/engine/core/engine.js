import EntityManager from "./entity-manager.js"

export default class Engine {

    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.lastRender = 0;
    }

    start() {
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timeStamp) {
        var progress = timeStamp - this.lastRender;

        this.update(progress);

        this.draw();

        this.lastRender = timeStamp;

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(delta) {
        EntityManager.getEntity().forEach(element => element.update(delta));
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        EntityManager.getEntity().forEach(element => element.draw(this.context));
    }
}
