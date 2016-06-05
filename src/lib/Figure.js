import utils from './utils';
import EventTarget from './EventTarget';

class Figure extends EventTarget {
    constructor(position, children = []) {
        super();
        this.position = position;
        this.children = [];
        children.forEach((figure) => this.addChild(figure));
    }
    
    get scene() {
        return this.parent.scene;
    }
    
    addChild(figure, index) {
        if (this.children.indexOf(figure) !== -1) {
            throw 'Failed to add child because it already exists!';
        }
        
        this.children.splice(index !== undefined ? index : this.children.length - 1, 0, figure);
        figure.parent = this;
        return this;
    }
    
    removeChild(figure) {
        var index = this.children.indexOf(figure);
        
        if (index === -1) {
            throw 'Failed to remove child because it was not found!';
        }
        
        this.children.splice(index, 1);
        figure.parent = null;
        return this;
    }

    move(vector) {
        this.position.move(vector);
        return this;
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
    draw() {
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
}

module.exports = Figure;
