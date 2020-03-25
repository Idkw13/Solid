// Interface segregation principle
class Animal {
  constructor (name) {
    this.name = name
  }
}

const swimmer = {
  swim () {
    console.log(`${this.name} can swim`)
  }
}

const flier = {
  fly () {
    console.log(`${this.name} can fly`)
  }
}

const walker = {
  walk () {
    console.log(`${this.name} can walker`)
  }
}

class Dog extends Animal {}

class Eagle extends Animal {}

class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)
console.error(Dog.prototype)

const dog = new Dog('Bart')
dog.walk()
dog.swim()

const eagle = new Eagle('Orel')
eagle.fly()
eagle.walk()

const whale = new Whale('Big blue friend')
whale.swim()
