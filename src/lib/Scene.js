import Parent from './Parent';
import Point from './Point';
import Mouse from './Mouse';
import Keyboard from './Keyboard';

class Scene extends Parent {
    constructor(context, children = []) {
        super(children);
        this.context = context;
        this.active = false;
        this.mouse = new Mouse(this.context.canvas);
        this.keyboard = new Keyboard();
    }

    get scene() {
        return this;
    }

    updateAll(previousState, currentState) {
        this.children.forEach(function update(figure) {
            figure.update(previousState, currentState);
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
        requestAnimationFrame(function step(lastState) {
            if (this.active) {
                var newState = {
                    mouse: JSON.parse(JSON.stringify(this.mouse)), // temp
                    keyboard: JSON.parse(JSON.stringify(this.keyboard)), // temp
                    time: Date.now()
                };

                this.updateAll(lastState || newState, newState);
                this.drawAll();
                requestAnimationFrame(step.bind(this, newState));
            }
        }.bind(this, null));
    }

    stop() {
        this.active = false;
    }
}

module.exports = Scene;
