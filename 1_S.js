// Single Responsibility Principe
class User {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  update (data) {
    this.name = data.name
    this.age = data.age
  }
}

class Printer {
  constructor (data) {
    this.data = data
  }

  print () {
    console.error(this.data)
  }

}

const printer = new Printer(
  new User('Nazarii', 23)
)
printer.print()
