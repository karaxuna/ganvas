import Point from './Point';

class Memory {
    constructor(scene) {
        this.scene = scene;
        var canvas = document.createElement('canvas');
        canvas.width = scene.context.canvas.width;
        canvas.height = scene.context.canvas.height;
        this.context = canvas.getContext('2d');
    }
    
    getImageData(figure) {
        this.clear();
        figure.draw(this.context);
        return this.context.getImageData(figure.absPosition.x, figure.absPosition.y, figure.size.width, figure.size.height);
    }
    
    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}

module.exports = Memory;