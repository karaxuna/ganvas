import Point from './lib/Point';
import Scene from './lib/Scene';
import Camera from './lib/Camera';
import Test from './lib/figures/Test';

var character = new Test(
    new Point(0, 0)
);

var camera = new Camera(
    new Point(0, 0),
    [character]
);

var scene = new Scene(document.getElementById('canvas').getContext('2d'), [camera]);
scene.start();

document.addEventListener('keydown', function (e) {
    // up
    if (e.which === 38) {
        camera.move({ x: 0, y: -5 });
    }
    // down
    if (e.which === 40) {
        camera.move({ x: 0, y: 5 });
    }
    // right
    if (e.which === 39) {
        camera.move({ x: 5, y: 0 });
    }
    // left
    if (e.which === 37) {
        camera.move({ x: -5, y: 0 });
    }

    // prevent default
    e.preventDefault();
});