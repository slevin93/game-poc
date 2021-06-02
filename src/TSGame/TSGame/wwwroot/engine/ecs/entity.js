export default class Entity {
    constructor(id) {
        this.id = id;
        this.components = new Map();
    }

    addComponent(component) {
        this.components.set(component.constructor.name, component);
    }

    getComponent(component) {
        return this.components.get(component);
    }
}