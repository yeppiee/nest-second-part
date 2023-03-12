import { CreateUserDto } from './dto/create-user.dto'
import { Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Ivan' },
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Ivan' }
  ]

  findAll(name?: string) {
    return name ? this.users.filter((user) => user.name === name) : this.users
  }

  findById(userId: number) {
    return this.users.find((user) => user.id === userId)
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto }
    this.users.push(newUser)
    return newUser
  }
}
