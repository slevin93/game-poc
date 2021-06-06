import Entity from "../../engine/ecs/entity.js";
import Transform from "../../engine/ecs/components/transform.js"
import Keyboard from "../../engine/input/keyboard.js";
import Material from "../../engine/material/material.js";

export default class Player extends Entity {
    constructor() {
        super("Player");

        this.speed = 0.2;

        this.addComponent(new Transform(50, 50, 50, 40));
        this.addComponent(new Material("green"));
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
        let transform = this.getComponent("Transform");

        if (Keyboard.IsKeyPressed("left")) {
            transform.x -= this.speed * deltaTime;
        }

        if (Keyboard.IsKeyPressed("right")) {
            transform.x += this.speed * deltaTime;
        }

        if (Keyboard.IsKeyPressed("up")) {
            transform.y -= this.speed * deltaTime;
        }

        if (Keyboard.IsKeyPressed("down")) {
            transform.y += this.speed * deltaTime;
        }
    }
}