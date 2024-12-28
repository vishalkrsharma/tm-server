import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { comparePassword } from 'src/common/password';
import { SigninDto } from 'src/modules/auth/dto/signin-dto';
import { SignupDto } from 'src/modules/auth/dto/signup-dto';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const { username, email, password } = signupDto;

    const existingUser = await this.usersService.findOne({ email, username });

    if (existingUser) {
      throw new HttpException(
        { message: 'User already exists' },
        HttpStatus.CONFLICT,
      );
    }

    const createdUser = await this.usersService.create({
      username,
      email,
      password,
    });

    const { password: createdUserPassword, ...createdUserWithoutPassword } =
      createdUser.toObject();

    const token = this.jwtService.sign({ userId: createdUser._id });

    return {
      message: 'User successfully registered',
      user: createdUserWithoutPassword,
      token,
    };
  }

  async signin(signinDto: SigninDto) {
    const { username, email, password } = signinDto;

    const existingUser = await this.usersService.findOne({ email, username });

    const checkPassword = await comparePassword(
      password,
      existingUser.password,
    );

    if (!checkPassword) {
      throw new HttpException(
        {
          message: 'Invalid password',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const token = this.jwtService.sign({ email });

    const { password: existingUserPassword, ...existingUserWithoutPassword } =
      existingUser.toObject();

    return {
      message: 'User successfully logged in',
      user: existingUserWithoutPassword,
      token,
    };
  }
}
