class Key {
  private signature: number;
  constructor() {
    console.log("KEY")
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    console.log("PERSON")
  }

  public getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

    constructor(key: Key) {
      console.log("HOUSE")
    this.key = key;
  }


  comeIn(person: Person) {
    if ((this.door = true)) {
      this.tenants.push(person);
      console.log(`Hi, i am tenant. My name ${this.tenants[0]}`)
    } 
  }
  abstract OpenDoor(key: Key): void;
}



class MyHouse extends House {
  OpenDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened. Come in")
    } else{
      console.log("The door is closed.")
    }
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};

