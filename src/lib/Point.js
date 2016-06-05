import utils from './utils';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    copy() {
        var self = this;
        return new Point(this.x, this.y);
    }
}

module.exports = Point;
