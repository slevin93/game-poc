import Entity from "../../engine/ecs/entity.js";
import Transform from "../../engine/ecs/components/transform.js";
import Material from "../../engine/material/material.js";

export default class Crate extends Entity {
    constructor() {
        super("Crate");

        this.addComponent(new Transform(50, 50, 100, 100));
        this.addComponent(new Material("red"));
    }

    draw(context) {
        // ToDo: Cache components
        const transform = this.getComponent("Transform");
        const material = this.getComponent("Material");

        var rectangle = new Path2D();
        rectangle.rect(transform.x, transform.y, transform.width, transform.height);
        context.fillStyle = material.colour;
        context.fill(rectangle);
    }

    update(deltaTime) {
    }
}