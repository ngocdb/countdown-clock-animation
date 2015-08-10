'use strict';

var Clock = require('./Clock'),
    c = createjs;

docReady(function(){
    var stage = new c.Stage('main');
    var x = 50,
        y = 50,
        sCircleRadius = 50,
        bCircleRadius = 75,
        text = 0,
        i = 1,
        countDown = 6, // 60 seconds
        finish = false;

    x = stage.canvas.width / 4;
    y = stage.canvas.height / 4;

    var clock1 = new Clock(x, y, sCircleRadius, bCircleRadius, text);
    clock1.setBigCircleColor("#F00");
    clock1.setSmallCircleColor("#000");
    clock1.setAnimationColor("#FFF");
    clock1.setTextStyle("30px bold Arial");
    clock1.setTextColor("#FFF");
    clock1.setStartAngle(270);
    clock1.setEndAngle(270);
    stage.addChild(clock1);

    createjs.Ticker.setFPS(countDown);
    createjs.Ticker.on("tick", function() {
        if (finish) {
            return;
        }
        clock1.addEndAngle(1);
        if (clock1.getEndAngle() < (clock1.getStartAngle() + 361 * clock1.getArcPi())) {
            if (!(i%countDown)) {
                clock1.setText(clock1.getText() + 1);
            }
            i++;
            clock1.drawClock();
            stage.update();
        } else {
            finish = true;
        }
    });

    stage.update();
});