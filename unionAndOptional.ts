type Admin = {
    role: string;
    password: number | string;
}

let admin: Admin = {
    role: 'Admin',
    password: 123
}

function getAdmin(admin: Admin): void {
    console.log(admin?.role);

}

const result = getAdmin(admin)