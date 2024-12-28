import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { SigninDto } from 'src/modules/auth/dto/signin-dto';
import { SignupDto } from 'src/modules/auth/dto/signup-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() createUserDto: SigninDto) {
    return this.authService.signin(createUserDto);
  }

  @Post('signup')
  signup(@Body() createUserDto: SignupDto) {
    return this.authService.signup(createUserDto);
  }
}
