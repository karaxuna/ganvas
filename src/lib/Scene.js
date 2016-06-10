import Parent from './Parent';
import Point from './Point';

class Scene extends Parent {
    constructor(context, children = []) {
        super(children);
        this.context = context;
        this.active = false;
    }

    get scene() {
        return this;
    }

    updateAll(diff) {
        this.children.forEach(function update(figure) {
            figure.update(diff);
            figure.children.forEach((child) => update(child));
        }.bind(this));
    }

    drawAll() {
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
                this.updateAll(now - last);
                this.drawAll();
                requestAnimationFrame(step.bind(this, now));
            }
        }.bind(this, Date.now()));
    }

    stop() {
        this.active = false;
    }
}

module.exports = Scene;
