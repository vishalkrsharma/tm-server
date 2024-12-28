import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hashPassword } from 'src/common/utils/password';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    unique: true,
  })
  username: string;

  @Prop({
    unique: true,
  })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  const user = this as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }

  try {
    user.password = await hashPassword(user.password);
    next();
  } catch (error) {
    next(error);
  }
});
