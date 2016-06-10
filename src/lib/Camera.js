import Figure from './Figure';
import Point from './Point';

class Camera extends Figure {
    constructor(position, children = []) {
        super(position, children);
    }

    get absPosition() {
        return new Point(-this.position.x, -this.position.y);
    }

    update(diff) {

    }

    draw() {

    }
}

module.exports = Camera;
