class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(user) {
    if (this.age > user.age) return `${this.firstName} is older than ${user.firstName}`;
    else if (this.age < user.age) return `${this.firstName} is younger than ${user.firstName}`;
    else return `${this.firstName} and ${user.firstName} are the same age`;
  }

  //   static compareAge(x, y) {
  //     if (x.age > y.age) {
  //       return `${x.firstName} is older than ${y.firstName}`;
  //     } else if (x.age < y.age) {
  //       return `${x.firstName} is younger than ${y.firstName}`;
  //     } else {
  //       return `${x.firstName} and ${y.firstName} are the same age`;
  //     }
}

const user1 = new User("Alberto", "Augimeri", 30, "New York");
const user2 = new User("Francesco", "Villella", 28, "Los Angeles");
const user3 = new User("Andrea", "Geria", 30, "Reggio Calabria");

console.log(user1.compareAge(user2));
console.log(user1.compareAge(user3));
console.log(user2.compareAge(user3));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  compareOwner(pet) {
    if (this.ownerName === pet.ownerName) return "They have the same name";
    else return "The owner's name is different";
  }
}

const form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();
  const petName = document.querySelector("#petName").value;
  const ownertName = document.querySelector("#ownerName").value;
  const species = document.querySelector("#species").value;
  const breed = document.querySelector("#breed").value;

  const pet1 = new Pet(petName, ownerName, species, breed);
  //   const pets = [];
  //   pets.push(pet1);
  //   console.log(pets);
  console.log(pet1);
};
