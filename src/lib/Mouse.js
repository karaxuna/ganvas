import Point from './Point';

class Mouse {
    constructor(container) {
        Object.defineProperties(this, {
            container: {
                get() {
                    return container;
                }
            },
            down: {
                enumerable: true,
                writable: true,
                value: false
            },
            position: {
                enumerable: true,
                writable: true,
                value: new Point(null, null)
            }
        });

        container.addEventListener('mousemove', (e) => {
            this.position.x = e.clientX - container.offsetLeft + document.body.scrollLeft;
            this.position.y = e.clientY - container.offsetTop + document.body.scrollTop;
        });

        container.addEventListener('mousedown', (e) => {
            this.down = true;
        });

        container.addEventListener('mouseup', (e) => {
            this.down = false;
        });
    }
}

module.exports = Mouse;
