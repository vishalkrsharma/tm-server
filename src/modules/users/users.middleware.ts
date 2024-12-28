import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashPassword } from 'src/common/password';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersMiddleware implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async onModuleInit() {
    this.userModel.schema.pre('save', async function (next) {
      const user = this as UserDocument;

      if (!user.isModified('password')) {
        return next();
      }

      try {
        user.password = await hashPassword(user.password);

        next();
      } catch (err) {
        next(err);
      }
    });
  }
}
