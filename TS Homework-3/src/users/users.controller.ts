import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Post()
  create(@Body() body: Omit<User, 'id'>) {
    return this.usersService.create(body);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<User>) {
    return this.usersService.update(+id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}