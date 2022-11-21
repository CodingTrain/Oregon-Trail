// Wagon needs to know its location on map, pace, and whether it is moving
// Since can get lost, might need to add direction as well

class Wagon {
    constructor(x,y, pace) {
        this.pos = createVector(x,y);
        this.vel = createVector(1,1);
        this.pace = pace;
        this.vel.mult(pace); 
    }

    updateLocation() {
        if (this.pace !== 0) {
            this.pos.add(this.vel);
        }
    }
    show() {
        fill(255);
        ellipse(this.pos.x , this.pos.y, 30, 30); // add wagon image (or train)
    }
}