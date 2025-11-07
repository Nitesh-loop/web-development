// challenge 1
let person = {
    name: "Nick",
    age: 27,
    country: "India"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


// challenge 2
let age = 62

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}
