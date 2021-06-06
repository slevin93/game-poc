import EntityManager from "../../core/entity-manager.js";

export default class PhysicsComponent {
    static hasCollided(entity) {
        for (var ent in EntityManager.getEntity()) {
            let result = PhysicsComponent.collided(entity, EntityManager.getEntity()[ent]);

            if (result !== null) {
                return result;
            }
        } 

        return null;
    }

    static collided(entity1, entity2) {

        if (entity1.id == entity2.id) {
            return null;
        }

        const obj1 = entity1.getComponent("Transform");
        const obj2 = entity2.getComponent("Transform");

        if (obj2.x > obj1.width + obj1.x || obj1.x > obj2.width + obj2.x || obj2.y > obj1.height + obj1.y || obj1.y > obj2.height + obj2.y) {
            return null
        } else {
            return entity2;
        }
    }
}