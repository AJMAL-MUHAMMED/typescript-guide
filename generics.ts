


type Admin = User & {
    role: string;
}

type User = {
    name: string;
    age: number;
}

const adminDe: Admin = {
    name: "admin",
    role: "admin",
    age: 123,
}

const userDe: User = {
    name: "ajmal",
    age: 25
}
function getDetails<T>(details: T): T {
    return details
}

getDetails<User>(userDe)
const value = getDetails<Admin>(adminDe)