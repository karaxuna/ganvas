import Figure from './Figure';
import Point from './Point';

class Scene extends Figure {
    constructor(context, position, children = []) {
        super(position, children);
        this.context = context;
        this.active = false;
    }

    get scene() {
        return this;
    }

    get absPosition() {
        return new Point(-this.position.x, -this.position.y);
    }

    update(diff) {
        this.children.forEach(function update(figure) {
            figure.update(diff);
            figure.children.forEach((child) => update(child));
        }.bind(this));
    }

    draw() {
        this.clear();
        this.children.forEach(function draw(figure) {
            figure.draw(this);
            figure.children.forEach((child) => draw(child));
        }.bind(this));
    }
    
    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    start() {
        this.active = true;
        requestAnimationFrame(function step(last) {
            if (this.active) {
                var now = Date.now();
                this.update(now - last);
                this.draw();
                requestAnimationFrame(step.bind(this, now));
            }
        }.bind(this, Date.now()));
    }

    stop() {
        this.active = false;
    }
}

module.exports = Scene;
