// abstract class and differnce from the interface.
// Similar to the one in JAVA.
// No object can be made from abstract class as it is a type of template for other class.
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
}
// const object1 = new TakePhoto('potrait', 'normal'); // Not allowed.

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); // Calling the super constructor.
  }

  getSepia(): void {
    console.log(`Sepia recieved`);
  }
}

const newUser = new Instagram("test", "test", 3);
newUser.getSepia();

export {};
