function CurveAnimator(from, to, c1, c2) {
    this.path = document.createElementNS('http://192.168.1.18/64/particles.js-master/demo/test.svg', 'path');
    // console.log(this.path);
    if (!c1) c1 = from;
    if (!c2) c2 = to;
    this.path.setAttribute('d', 'M' + from.join(',') + 'C' + c1.join(',') + ' ' + c2.join(',') + ' ' + to.join(','));
    this.updatePath();
    CurveAnimator.lastCreated = this;
}
CurveAnimator.prototype.animate = function(duration, callback, delay) {
    var curveAnim = this;
    // TODO: Use requestAnimationFrame if a delay isn't passed
    if (!delay) delay = 1 / 40;
    clearInterval(curveAnim.animTimer);
    var startTime = new Date;
    curveAnim.animTimer = setInterval(function() {
        var now = new Date;
        var elapsed = (now - startTime) / 1000;
        var percent = elapsed / duration;
        if (percent >= 1) {
            percent = 1;
            clearInterval(curveAnim.animTimer);
        }
        var p1 = curveAnim.pointAt(percent - 0.01),
            p2 = curveAnim.pointAt(percent + 0.01);
        callback(curveAnim.pointAt(percent), Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI);
    }, delay * 1000);
};
CurveAnimator.prototype.stop = function() {
    clearInterval(this.animTimer);
};
CurveAnimator.prototype.pointAt = function(percent) {
    return this.path.getPointAtLength(this.len * percent);
};
CurveAnimator.prototype.updatePath = function() {
    this.len = this.path.getTotalLength();
};
CurveAnimator.prototype.setStart = function(x, y) {
    var M = this.path.pathSegList.getItem(0);
    M.x = x;
    M.y = y;
    this.updatePath();
    return this;
};
CurveAnimator.prototype.setEnd = function(x, y) {
    var C = this.path.pathSegList.getItem(1);
    C.x = x;
    C.y = y;
    this.updatePath();
    return this;
};
CurveAnimator.prototype.setStartDirection = function(x, y) {
    var C = this.path.pathSegList.getItem(1);
    C.x1 = x;
    C.y1 = y;
    this.updatePath();
    return this;
};
CurveAnimator.prototype.setEndDirection = function(x, y) {
    var C = this.path.pathSegList.getItem(1);
    C.x2 = x;
    C.y2 = y;
    this.updatePath();
    return this;
};

var ctx = document.querySelector('canvas').getContext('2d');
ctx.fillStyle = 'red';

var curve = new CurveAnimator([50, 300], [350, 300], [445, 39], [1, 106]);

curve.animate(5, function(point, angle) {
    // Erase the canvas
    ctx.save();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(point.x-10, point.y-10, 20, 20);
    ctx.restore();
});