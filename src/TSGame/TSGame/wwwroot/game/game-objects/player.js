import Entity from "../../engine/ecs/entity.js";
import Transform from "../../engine/ecs/components/transform.js"

export default class Player extends Entity {
    constructor() {
        super("Player");

        this.addComponent(new Transform(50, 50, 50, 40));
    }

    draw(context) {
        const transform = this.getComponent("Transform");

        var rectangle = new Path2D();
        rectangle.rect(transform.x, transform.y, transform.width, transform.height);
        context.fill(rectangle);
    }

    update(deltaTime) {
        const transform = this.getComponent("Transform");

        transform.x += 1;

        console.log(`Update ${deltaTime}`);
    }
}