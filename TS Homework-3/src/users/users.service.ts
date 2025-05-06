import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@gmail.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com', role: 'user' },
  ];
  findAll(): User[] {
    return this.users;
  }
  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  create(user: Omit<User, 'id'>): User {
    const newUser: User = {
      id: Date.now(),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, updateUser: Partial<User>): User {
    const user = this.findOne(id);
    Object.assign(user, updateUser);
    return user;
  }
  delete(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException('User not found');
    this.users.splice(index, 1);
  }
}