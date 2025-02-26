export enum Role {
    Admin = 'Admin',
    User = 'User',
}

export class User {
    id: string;
    email: string;
    password: string;
    role: `${Role}`;

    constructor({ id, email, password, role }: {
        id: string;
        email: string;
        password: string;
        role: `${Role}`;
    }) {
        this.id = id;
        this.email = email;
        this.password = password; // need to hash password
        this.role = role;
    }

    comparePassword(password: string) {
        // need to replace with compare password logic
        return this.password === password;
    }
}