/**
* @description : animate "firefly" on a black screen, when mouse moved, a red point ligth up at mouse position
*                and fireflies follow it
*
* @author cxts  <couchaux.thomas@gmail.com>
* @github https://github.com/cxTs
* @date 19/06/2020
* @required Draw.js, misc.js, Vector.js, Ray.js, Light.js, Vehicle.js, Firefly.js
* @param {VOID} none
* @return {VOID}
*
**/
let mouse = new FireFly(0, 0, 5, 10, "#F042");
let target = null;
let fireF = [];
let nbFireFly = 100;

// populating fireF with firefly object
for(let i = 0; i < nbFireFly; i++) {
    fireF.push(new FireFly(getRandom(0, width), getRandom(0, height), 10, 20, "#FFFF000C"));
    fireF[i].velocity.add(new Vector(getRandom(-1, 1), getRandom(-1, 1)));
}


let logMousePosition = new Vector(0,0);

/**
* @description : called by window.requestAniamtionFrame(), draw the entire animation on canvas
* @param {VOID}
* @return {VOID}
*
**/
function draw() {
    clear();
    for(let v of fireF) {
        v.show();
        if(target != null) {
                v.steer(target)
        }
        v.separate(fireF);
        v.edgeToEdge(width, height);
        v.update();
    }
    if(target != null) {
            mouse.show();
    }
    if(!__paused) {
        window.requestAnimationFrame(draw);
    }
}
window.requestAnimationFrame(draw);

// get the mouse location and set target with it
document.onmousemove = function(e) {
    mouse.move(e.clientX, e.clientY);
    target = mouse.location;
}
