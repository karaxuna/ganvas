class Keyboard {
    static get KEYS() {
        return {
            38: 'UP',
            40: 'DOWN',
            39: 'RIGHT',
            37: 'LEFT'
        };
    }

    constructor() {
        this.keys = Object.keys(this.constructor.KEYS).reduce((keys, code) => {
            keys[this.constructor.KEYS[code]] = { pressed: false };
            return keys;
        }, {});

        document.addEventListener('keydown', (e) => {
            var key = this.constructor.KEYS[e.which];
            this.keys[key] = this.keys[key] || {};
            this.keys[key].pressed = true;
            e.preventDefault();
        });

        document.addEventListener('keyup', (e) => {
            var key = this.constructor.KEYS[e.which];
            this.keys[key] = this.keys[key] || {};
            this.keys[key].pressed = false;
            e.preventDefault();
        });
    }
}

module.exports = Keyboard;