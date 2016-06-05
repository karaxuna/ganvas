import Line from './lib/Line';
import Scene from './lib/Scene';
import Point from './lib/Point';

var line = new Line(
    new Point(0, 0),
    new Point(100, 100),
    new Point(200, 200),
    5
);

var line2 = new Line(
    new Point(0, 0),
    new Point(200, 100),
    new Point(100, 200),
    5
);

var scene = new Scene(document.getElementById('canvas').getContext('2d'), [line, line2]);
scene.draw();

var i = 1;
setInterval(function () {
    if (line.position.y > 50) {
        i = -1;
    }
    else if (line.position.y < 5) {
        i = 1;
    }
    
    line.position.move({ x: 0, y: i });
    scene.draw();
}, 20);