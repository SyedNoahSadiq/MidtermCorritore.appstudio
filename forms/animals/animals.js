let myAnimals = ["dog", "cat", "horse", "meerkat"]

let newAnimal = prompt("Enter new animal")
let lastAnimal = newAnimal.toLowerCase()

myAnimals.push(lastAnimal)
alert(`The last animal is a/an ${myAnimals[myAnimals.length - 1]}`)
