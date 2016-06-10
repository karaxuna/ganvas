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