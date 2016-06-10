import Figure from './Figure';
import Point from './Point';

class Camera extends Figure {
    constructor(position, children = []) {
        super(position, children);
    }

    get absPosition() {
        return new Point(-this.position.x, -this.position.y);
    }

    update(previousState, currentState) {
        // up
        if (currentState.keyboard.keys.UP.pressed) {
            this.move({ x: 0, y: -5 });
        }
        // down
        if (currentState.keyboard.keys.DOWN.pressed) {
            this.move({ x: 0, y: 5 });
        }
        // right
        if (currentState.keyboard.keys.RIGHT.pressed) {
            this.move({ x: 5, y: 0 });
        }
        // left
        if (currentState.keyboard.keys.LEFT.pressed) {
            this.move({ x: -5, y: 0 });
        }
    }

    draw() {

    }
}

module.exports = Camera;
