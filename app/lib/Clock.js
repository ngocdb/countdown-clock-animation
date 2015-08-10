var c = createjs;

function Clock(x, y, sCircleRadius, bCircleRadius, text) {
    this.Container_constructor();
    this.x = x;
    this.y = y;
    this.sCircleRadius = sCircleRadius;
    this.bCircleRadius = bCircleRadius;
    this.body = new c.Shape();
    this.text = text;
    this.countDownText = new c.Text(this.text);
    this.addChild(this.body);
    this.addChild(this.countDownText);
}
c.extend(Clock, c.Container);

Clock.prototype.drawClock = function() {
    //console.log("draw");
    this.body.graphics.beginFill(this.bCircleColor)
        .drawCircle(this.x, this.y, this.bCircleRadius)
        .endFill();

    this.body.graphics.beginFill(this.animationColor)
        .moveTo(this.x, this.y)
        .arc(this.x, this.y, this.bCircleRadius - 1, this.startAngle, this.endAngle)
        .endFill();

    this.body.graphics.beginFill(this.sCircleColor)
        .drawCircle(this.x, this.y, this.sCircleRadius)
        .endFill();

    this.countDownText.x = this.x - this.countDownText.getMeasuredWidth() / 2;
    this.countDownText.y = this.y - this.countDownText.getMeasuredHeight() / 2;
}
Clock.prototype.getArcPi = function() {
    return Math.PI / 180;
}
Clock.prototype.setSmallCircleColor = function(sCircleColor) {
    this.sCircleColor = sCircleColor;
}
Clock.prototype.setBigCircleColor = function(bCircleColor) {
    this.bCircleColor = bCircleColor;
}
Clock.prototype.setAnimationColor = function(animationColor) {
    this.animationColor = animationColor;
}
Clock.prototype.setText = function(text) {
    this.text = text;
    this.countDownText.text = this.text;
}
Clock.prototype.getText = function() {
    return this.text;
}
Clock.prototype.setTextColor = function(textColor) {
    this.textColor = textColor;
    this.countDownText.color = this.textColor;
}
Clock.prototype.setTextStyle = function(textStyle) {
    this.textStyle = textStyle;
    this.countDownText.font = this.textStyle;
}
Clock.prototype.setStartAngle = function(startAngle) {
    this.startAngle = startAngle * this.getArcPi();
}
Clock.prototype.getStartAngle = function() {
    return this.startAngle;
}
Clock.prototype.setEndAngle = function(endAngle) {
    this.endAngle = endAngle * this.getArcPi();
}
Clock.prototype.addEndAngle = function(endAngle) {
    this.endAngle += endAngle * this.getArcPi();
}
Clock.prototype.getEndAngle = function() {
    return this.endAngle;
}

c.promote(Clock, "Container");
module.exports = Clock;