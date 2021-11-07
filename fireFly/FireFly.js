/**
*
* @description : class Firefly
*
* @author Thomas Couchaux  <thomas.couchaux@gmail.com>
* @github https://github.com/cxTs
* @date 11/03/2020
* @required : Vehicle.js, Light.js, Ray.js
* @param {NUMBER}  x : value of x position
* @param {NUMBER}  y : value of y position
* @param {NUMBER}  radius : value of the firefly radius
* @param {NUMBER}  nbRay : amount of Light ray that will fake the lightness of the firefly
* @param {STRING}  : css formated color
* @return {OBJECT}  : return a firefly, inheriting class Vehicle, using class Light and class Ray for the
*                     lightness effect
*/

class FireFly extends Vehicle {
    light;
    wallsDistance = 20;
    walls;
    constructor(x, y, radius, nbRay, color) {
        super(x, y, radius * 2);
        this.light = new Light(x, y, nbRay, radius, color);
        this.maxSpeed = 2;
        this.maxForce = .5;
        this.avoidSpeed = 2;
        this.avoidForce = .5;
        this.arrivingZone = 0;
        this.avoidingZone = this.size / 2;
        this.neighborZone = this.size ;
        //this.initWalls();
    }
}
// PROTO //

/**
*
* @description : draw firefly on the canvas
* @param {VOID}
* @return {TYPE}
*
**/
FireFly.prototype.show = function() {
    this.light.show();
}

/**
*
* @description : make the firefly move to the new coordinate x,y,z
* @param {NUMBER} x : new value of the x position
* @param {NUMBER} y : new value of the y position
* @param {NUMBER} z : new value of the z position
* @return {VOID} :
*
**/
FireFly.prototype.move = function(x, y, z) {
    this.location.move(x, y, z);
    this.light.move(this.location);
}

/**
*
* @description : update (acceleration algorithm)
* @param {VOID} :
* @return {TYPE} :
*
**/
FireFly.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.limitSpeed();
    this.location.add(this.velocity);
    this.light.move(this.location);
    this.acceleration.mult(0);
}
