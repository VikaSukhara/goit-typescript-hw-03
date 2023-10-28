class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(a: number): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  comeIn(person: Person) {
    if ((this.door = true)) {
      this.tenants.push(person);
    }
  }
  public abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
      }
  OpenDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
    } 
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
