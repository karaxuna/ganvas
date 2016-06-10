import utils from '../utils';
import Figure from '../Figure';
import Size from '../Size';

var Text = global.Text = function (parent, position, text, font, align) {
    var self = this;
    Figure.call(self, position);
    self.text = text;
    self.font = font;
    self.align = align;
};

utils.extend(Text.prototype, [Figure.prototype, {
    draw: utils.chain(function () {
        var self = this,
            context = self.scene.context,
            absPosition = self.getabsPosition,
            text = self.text,
            font = self.font,
            align = self.align;

        context.textBaseline = 'top';
        context.textAlign = align;
        context.font = font.getCombinedText();
        context.fillText(text, absPosition.x, absPosition.y);
    }),

    getSize: function () {
        var self = this,
            text = self.text,
            font = self.font,
            vctx = document.createElement('canvas').getContext('2d');

        vctx.textBaseline = 'top';
        vctx.font = font.getCombinedText();
        return new Size(vctx.measureText(text).width, font.size);
    },

    pointInside: function (pt) {
        var self = this,
            absPosition = self.getAbsPosition(),
            size = self.getSize();

        return pt.x >= absPosition.x && pt.x <= absPosition.x + size.width &&
            pt.y >= absPosition.y && pt.y <= absPosition.y + size.height;
    }
}]);

module.exports = Text;
