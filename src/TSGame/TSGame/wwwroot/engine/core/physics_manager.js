export default class PhysicsManager {
    static processCollision(entities) {
        for (const entity1 of entities) {
            for (const entity2 of entities) {
                if (PhysicsManager.collided(entity1, entity2)) {
                    const collider = entity1.getComponent("Collider");

                    if (collider != null) {
                        collider.hasCollided = true;
                        collider.collidedObject = entity2;
                    }
                }
            }
        }
    }

    static clearColliders(entities) {
        for (const entity1 of entities) {
            const collider = entity1.getComponent("Collider");

            if (collider != null) {
                collider.hasCollided = false;
                collider.collidedObject = null;
            }
        }
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