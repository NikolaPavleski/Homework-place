import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Post('login')
  login(@Body() credentials: { email: string; password: string }) {
    return this.authService.login(credentials.email, credentials.password);
  }
}