type personDetails = {
    name: string;
    age: number;
    place: string;
}


let person: personDetails = {
    name: "ajmal",
    age: 25,
    place: "pattambi"
}

function getPerson(person: personDetails): string {
    return person.name
}

const resultPerson = getPerson(person)
