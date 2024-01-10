"use strict";
// interfaces are used for classes when certain actions in a class must have those features.
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
    createStory() {
        console.log("Story created.");
    }
}
