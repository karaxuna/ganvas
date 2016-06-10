import utils from '../utils';
import Figure from '../Figure';
import Point from '../Point';

class Polygon extends Figure {
    constructor(position, points, children = []) {
        super(position, children);
        this.points = points;
    }
    
    draw() {
        var self = this,
            context = self.scene.context,
            absPosition = self.absPosition,
            points = self.points;

        context.beginPath();
        context.moveTo(absPosition.x + points[0].x, absPosition.y + points[0].y);

        for (var i = 1; i < points.length; i++) {
            var point = points[i];
            context.lineTo(absPosition.x + point.x, absPosition.y + point.y);
        }

        context.closePath();
        context.stroke();
        return this;
    }
    
    pointInside(pt) {
        var self = this,
            points = self.points,
            absPosition = self.absPosition;

        for (var rpointi, rpointj, c = false, i = -1, l = points.length, j = l - 1; ++i < l; j = i) {
            rpointi = new Point(absPosition.x + points[i].x, absPosition.y + points[i].y);
            rpointj = new Point(absPosition.x + points[j].x, absPosition.y + points[j].y);

            ((rpointi.y <= pt.y && pt.y < rpointj.y) || (rpointj.y <= pt.y && pt.y < rpointi.y)) &&
                (pt.x < (rpointj.x - rpointi.x) * (pt.y - rpointi.y) / (rpointj.y - rpointi.y) + rpointi.x) &&
                (c = !c);
        }
        return c;
    }
}

module.exports = Polygon;
