export default class Keyboard {
    static IsKeyPressed(key) {
        return this.keyState[key];
    }

    static keydown(event) {
        var key = this.keyMap[event.keyCode]
        this.keyState[key] = true
    }

    static keyup(event) {
        var key = this.keyMap[event.keyCode]
        this.keyState[key] = false
    }
}

Keyboard.keyMap = {
    68: "right",
    65: "left",
    87: "up",
    83: "down"
};

Keyboard.keyState = {
    left: false,
    right: false,
    up: false,
    down: false
}

window.addEventListener("keydown", Keyboard.keydown.bind(Keyboard), false);
window.addEventListener("keyup", Keyboard.keyup.bind(Keyboard), false);
