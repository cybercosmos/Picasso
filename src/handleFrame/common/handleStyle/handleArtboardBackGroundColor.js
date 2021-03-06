const {
    calculateRGB
} = require('../../../common/utils');
module.exports = (record, layer) => {
    if (layer.backgroundColor && layer.hasBackgroundColor && layer.includeBackgroundColorInExport) {
        let {
            alpha,
            red,
            green,
            blue
        } = layer.backgroundColor;
        // 如果设置了 Opacity 属性，则 fills border 需要乘于这个数值
        if (layer.style.contextSettings) {
            alpha = layer.style.contextSettings.opacity * alpha;
        }
        if (alpha > 0) {
            record.style['background-color'] = `rgba(${calculateRGB(red)},${calculateRGB(green)},${calculateRGB(blue)},${alpha})`;
        }
    } else {
        record.style['background-color'] = `rgba(255,255,255,1)`;
    }
}