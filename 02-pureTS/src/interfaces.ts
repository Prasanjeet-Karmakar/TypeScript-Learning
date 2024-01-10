interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: number;
}

// interfaces are used for classes when certain actions in a class must have those features.
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}
}

interface Story {
  createStory(): void;
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("Story created.");
  }
}
