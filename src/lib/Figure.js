import Parent from './Parent';

class Figure extends Parent {
    constructor(position, children = []) {
        super(children);
        this.position = position;
    }

    move(vector) {
        this.position.move(vector);
        return this;
    }

    get scene() {
        return this.parent.scene;
    }

    get absPosition() {
        return this.parent ? this.parent.absPosition.copy().move(this.position) : this.position;
    }

    /*
    * draw - draw on canvas
    * abstract
    * @param Scene - instance of scene to draw there
    * @returns Figure - self
    */
    draw(scene) {
        throw 'Not implemented';
    }

    /*
    * pointInside - determines whether the point is inside figure or not
    * abstract
    * @param Point - point
    * @returns Boolean - result
    */
    pointInside() {
        throw 'Not implemented';
    }

    update(diff) {
        throw 'Not implemented';
    }
}

module.exports = Figure;
