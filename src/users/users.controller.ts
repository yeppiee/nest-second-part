import { CreateUserDto } from './dto/create-user.dto'
import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Controller('users')
export class UsersController {
	constructor(private userService: UsersService) {}

	@Get()
	getUsers(): User[] {
		return this.userService.findAll()
	}

	@Get(':id')
	getUserById(@Param('id', ParseIntPipe) id: number): User {
		return this.userService.findById(id)
	}

	@Post()
	createUser(@Body() createUserDto: CreateUserDto): User {
		return this.userService.createUser(createUserDto)
	}
}
