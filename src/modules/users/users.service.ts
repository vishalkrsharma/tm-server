import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne({ username, email }: { username?: string; email?: string }) {
    const user = await this.userModel.findOne({
      $or: [{ username }, { email }],
    });
    return user;
  }

  async create(user: User) {
    const createdUser = await this.userModel.create(user);
    return createdUser.save();
  }
}
