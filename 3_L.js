// Liskov substitution principle
class Person {

}

class Member extends Person {
  access () {
    console.log(`You have access`)
  }
}

class Guest extends Person {

}

class Frontend extends Member {
  constructor () {super()}

  canWriteCode () {

  }
}

class Backend extends Member {
  canWriteCode () {

  }
}

class MobileApplicationDeveloper extends Guest {
  access () {
    throw new Error(`You don't have access`)
  }
}

function openSecretDoor (member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())

// openSecretDoor(new MobileApplicationDeveloper()) // Here should be member ;

