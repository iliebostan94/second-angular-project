import { Injectable } from '@angular/core';
import { User } from './user.model';



export class UsersService {
    @Injectable({
        providedIn: 'root'
      })
    users: User[] = [
        new User(
            'Jenn',
            1,
            5,
            'I liked it! I will share it with my sister.'
        ),
        new User(
            'Alex',
            2,
            4,
            'Felt like adding some lemon to it.'
        ),
        new User(
            'Tania',
            3,
            5,
            'Really liked it! Gonna share it with my friends ;)'
        ),
    ];
    constructor() {}

    getUsers(): User[] {
        return this.users;
      }
}





