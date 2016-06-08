import Polygon from './lib/Polygon';
import Scene from './lib/Scene';
import Point from './lib/Point';

var polygon = new Polygon(
    new Point(0, 0),
    [new Point(100, 100), new Point(200, 200), new Point(100, 200)]
);

var scene = new Scene(document.getElementById('canvas').getContext('2d'), [polygon]);
scene.draw();

var i = 1;
setInterval(function () {
    if (polygon.position.y > 50) {
        i = -1;
    }
    else if (polygon.position.y < 5) {
        i = 1;
    }
    
    polygon.position.move({ x: 0, y: i });
    scene.draw();
}, 20);