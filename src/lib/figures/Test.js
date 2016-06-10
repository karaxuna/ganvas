import Figure from '../Figure';
import Polygon from './Polygon';
import Point from '../Point';

class Test extends Polygon {
    constructor(position) {
        super(position, [new Point(100, 100), new Point(200, 200), new Point(100, 200)]);
    }

    update(diff) {
        //this.move({ x: 1, y: 0 });
    }
}

module.exports = Test;