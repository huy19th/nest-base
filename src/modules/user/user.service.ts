import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Role } from './user.schema';

@Injectable()
export class UserService {
    private users: User[] = [
        new User({
            id: '6ff484fe-f7af-45f1-bc25-8c051325b2c3',
            email: 'admin@gmail.com',
            password: '1234',
            role: Role.Admin
        }),
        new User({
            id: '8620abbf-18ce-4ffd-8fdd-8c57f3f6dc97',
            email: 'user@gmail.com',
            password: '1234',
            role: Role.User
        })
    ];
    
    findAll() {
        return this.users;
    }

    findByEmail(email: string) {
        return this.users.find(user => user.email === email);
    }

    findById(id: string) {
        return this.users.find(user => user.id === id);
    }

    create(email: string, password: string) {
        const user = new User({
            id: '8620abbf-18ce-4ffd-8fdd-8c57f3f6dc' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
            email,
            password,
            role: Role.User
        });
        this.users.push(user);
        return user;
    }
}