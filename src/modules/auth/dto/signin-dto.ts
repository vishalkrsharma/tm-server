import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

// Custom validator to ensure at least one field (email or username) is provided
@ValidatorConstraint({ name: 'atLeastOneField', async: false })
class AtLeastOneField implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const { email, username } = args.object as any;
    return !!email || !!username; // Returns true if at least one of the fields is provided
  }

  defaultMessage(args: ValidationArguments) {
    return 'Either email or username must be provided';
  }
}

export class SigninDto {
  @IsString({ message: 'Email must be a string' })
  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;

  @IsString({ message: 'Username must be a string' })
  @IsOptional()
  username?: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(4, { message: 'Password must be at least 4 characters long' })
  password: string;

  @Validate(AtLeastOneField, {
    message: 'Either email or username must be provided',
  })
  validateAtLeastOneField!: boolean;
}
