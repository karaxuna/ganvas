import utils from './utils.js';
import EventTarget from './EventTarget';
import Mouse from './Mouse';
import Figure from './Figure';
import Point from './Point';

class Scene extends Figure {
    constructor(context, children = []) {
        super(new Point(0, 0), children);
        this.context = context;
    }
    
    get scene() {
        return this;
    }
    
    draw() {
        this.clear();
        this.children.forEach(function draw(figure) {
            figure.draw();
            figure.children.forEach((child) => draw(child));
        }.bind(this));
    }
    
    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}

module.exports = Scene;
