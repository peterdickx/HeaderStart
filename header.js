"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;

setup();
update();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    context.font = "bold 48pt Arial";
}

function update(){
    frameCount++;
    context.fillStyle = Utils.hsl(frameCount%360,70,50);
    context.fillRect(0,0,width,height);
    context.fillStyle = "white";
    context.fillText("Firstname Lastname", width / 2, height / 2);
    requestAnimationFrame(update);
}

