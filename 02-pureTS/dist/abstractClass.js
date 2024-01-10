"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class and differnce from the interface.
// Similar to the one in JAVA.
// No object can be made from abstract class as it is a type of template for other class.
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const object1 = new TakePhoto('potrait', 'normal'); // Not allowed.
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // Calling the super constructor.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log(`Sepia recieved`);
    }
}
const newUser = new Instagram("test", "test", 3);
newUser.getSepia();
