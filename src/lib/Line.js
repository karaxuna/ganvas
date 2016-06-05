import utils from './utils';
import Figure from './Figure';
import Point from './Point';
import Size from './Size';
import Vector from './Vector';

class Line extends Figure {
    constructor(position, start, end, width) {
        super(position);
        this.start = start;
        this.end = end;
        this.width = width;
    }
    
    draw() {
        var self = this,
            context = self.scene.context,
            absPosition = self.absPosition,
            absStart = absPosition.copy().move(self.start),
            absEnd = absPosition.copy().move(self.end),
            width = self.width;

        context.beginPath();
        context.lineWidth = width;
        context.moveTo(absStart.x, absStart.y);
        context.lineTo(absEnd.x, absEnd.y);
        context.stroke();
        return this;
    }

    pointInside() {
        return false;
    }
}

module.exports = Line;
