import Point from './lib/Point';
import Scene from './lib/Scene';
import Test from './lib/figures/Test';

var character = new Test(
    new Point(0, 0)
);

var scene = new Scene(document.getElementById('canvas').getContext('2d'), new Point(0, 0), [character]);
scene.start();

document.addEventListener('keydown', function (e) {
    // up
    if (e.which === 38) {
        scene.move({ x: 0, y: -5 });
    }
    // down
    if (e.which === 40) {
        scene.move({ x: 0, y: 5 });
    }
    // right
    if (e.which === 39) {
        scene.move({ x: 5, y: 0 });
    }
    // left
    if (e.which === 37) {
        scene.move({ x: -5, y: 0 });
    }

    // prevent default
    e.preventDefault();
});