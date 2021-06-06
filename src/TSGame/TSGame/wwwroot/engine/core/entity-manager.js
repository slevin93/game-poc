export default class EntityManager {
    static addEntity(entity) {

        if (this.entities == null) {
            this.entities = [];
        }

        this.entities.push(entity);
    }

    static getEntity() {
        return this.entities;
    }
}